const CACHE_NAME = 'litoral-norte-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/stylesheets/Imagem.css',
    '/public/imagem/icon.jpg',
    '/icons/icon-192x192.jpeg',
    '/icons/icon-512x512.jpeg',
    '/icons/sandro.ico'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});
