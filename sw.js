self.addEventListener('install', (event) => {
    console.log("SW: Install");
    const cachePromise = caches.open('cache-v1').then((cache) => {
        return cache.addAll(
            [
                '/',
                './index.html',
                './pages/sum.html',
                './pages/rest.html',
                './pages/mult.html',
                './pages/div.html',
                './js/app.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js',
            ]
        )
    })
    event.waitUntil(cachePromise);
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    const cacheRes = caches.match(event.request);
    event.respondWith(cacheRes);
});