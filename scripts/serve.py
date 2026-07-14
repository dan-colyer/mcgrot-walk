#!/usr/bin/env python3
"""Static dev server with caching disabled — stale-bundle bugs cost us an hour."""
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        super().end_headers()


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5174
    ThreadingHTTPServer(('', port), NoCacheHandler).serve_forever()
