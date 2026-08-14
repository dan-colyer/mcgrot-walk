#!/usr/bin/env python3
"""Static dev server with caching disabled — stale-bundle bugs cost us an hour."""
import os
import sys
import threading
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class _BoundedReader:
    """Wraps an open file, yielding at most `length` bytes then EOF.

    SimpleHTTPRequestHandler's copyfile() reads its source with
    shutil.copyfileobj, which does not know where a byte range ends — plain
    file objects only stop at the file's real EOF.
    """

    def __init__(self, f, length):
        self._f = f
        self._remaining = length

    def read(self, size=-1):
        if self._remaining <= 0:
            return b''
        chunk = size if size is not None and size >= 0 else self._remaining
        data = self._f.read(min(chunk, self._remaining))
        self._remaining -= len(data)
        return data

    def close(self):
        self._f.close()


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Accept-Ranges', 'bytes')
        super().end_headers()

    # HTTP Range support (206 Partial Content), additive: a request with no
    # Range header gets byte-for-byte the same response as before. Added for
    # McGrot's G4b — without it, and without `Accept-Ranges`, Chromium's
    # media pipeline treats a progressively-downloaded <audio> element as
    # NOT SEEKABLE at all: `audio.seekable` stayed `[0, 0]` even once
    # `buffered` covered the whole file and readyState was HAVE_ENOUGH_DATA.
    # Setting `.currentTime` on such an element is silently dropped — it
    # snaps back to 0 rather than throwing or queuing — which is why a
    # seek-to-elapsed looked like it worked (no error) while actually always
    # starting from the beginning. Confirmed against a real request/response
    # (curl -H "Range: bytes=1000-2000") and against a real <audio> element's
    # `seekable`/`buffered`/`currentTime` before landing this.
    def send_head(self):
        range_header = self.headers.get('Range')
        if not range_header or not range_header.startswith('bytes='):
            return super().send_head()
        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().send_head()
        file_size = os.path.getsize(path)
        try:
            start, end = self._parse_range(range_header, file_size)
        except ValueError:
            self.send_response(416)
            self.send_header('Content-Range', f'bytes */{file_size}')
            self.end_headers()
            return None
        f = open(path, 'rb')
        f.seek(start)
        length = end - start + 1
        self.send_response(206)
        self.send_header('Content-type', self.guess_type(path))
        self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
        self.send_header('Content-Length', str(length))
        self.end_headers()
        return _BoundedReader(f, length)

    @staticmethod
    def _parse_range(header, file_size):
        # First range only — every McGrot's/street caller (a browser's media
        # element) sends one range per request; a multi-range request would
        # need a multipart/byteranges body this does not build.
        spec = header[len('bytes='):].split(',')[0].strip()
        a, _, b = spec.partition('-')
        if a == '':
            suffix = int(b)
            start = max(0, file_size - suffix)
            end = file_size - 1
        else:
            start = int(a)
            end = int(b) if b else file_size - 1
        end = min(end, file_size - 1)
        if start > end or start < 0:
            raise ValueError('bad range')
        return start, end


def exit_when_orphaned(interval=2.0):
    """Die with our parent.

    smoke.mjs kills this server in a `finally`, which covers every ordinary
    exit — but not a SIGKILL of the node process, and not a terminal window
    closing out from under an interrupted run. No handler on the parent side
    can catch those, so the child has to notice for itself: once we are
    reparented (ppid becomes 1, or launchd), nobody is ever going to shut us
    down and we would sit on a port until the machine reboots. Nine such
    strays had accumulated before this was added.
    """
    original = os.getppid()
    while True:
        time.sleep(interval)
        ppid = os.getppid()
        if ppid != original or ppid == 1:
            os._exit(0)


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5174
    threading.Thread(target=exit_when_orphaned, daemon=True).start()
    ThreadingHTTPServer(('', port), NoCacheHandler).serve_forever()
