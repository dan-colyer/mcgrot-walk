#!/usr/bin/env python3
"""Static dev server with caching disabled — stale-bundle bugs cost us an hour."""
import os
import sys
import threading
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        super().end_headers()


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
