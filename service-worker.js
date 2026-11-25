// Service worker ringan. Tidak menyimpan HTML/API Apps Script ke cache.
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
