"""Servidor local de la maqueta con caché desactivado (para que siempre veas la última versión)."""
import http.server, socketserver

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

class Server(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True

if __name__ == '__main__':
    with Server(('127.0.0.1', 8000), NoCacheHandler) as httpd:
        print('Maqueta en http://localhost:8000  (sin cache)')
        httpd.serve_forever()
