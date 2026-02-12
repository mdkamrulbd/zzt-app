// Service Worker for Zam Zam Trading website
// Provides offline functionality and performance optimization

const CACHE_VERSION = 'v4';
const CACHE_NAME = `zzt-${CACHE_VERSION}`;
const STATIC_CACHE = `zzt-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `zzt-dynamic-${CACHE_VERSION}`;

// Assets to cache immediately (only existing files)
const STATIC_ASSETS = [
  '/css/style.css',
  '/js/script.js',
  '/manifest.json',
  '/images/logo.svg',
  '/assets/logo.svg'
];

// Simplified installation
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .catch(() => {/* Cache failed, skip */})
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (!cache.startsWith('zzt-') || (cache !== STATIC_CACHE && cache !== DYNAMIC_CACHE)) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', event => {
  // Skip non-GET requests and external URLs
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  if (event.request.destination === 'document') {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // Fetch from network and cache dynamic content
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone response as it can only be consumed once
            const responseToCache = response.clone();

            // Cache dynamic content (images, fonts, etc.)
            if (shouldCache(event.request.url)) {
              caches.open(DYNAMIC_CACHE)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          })
          .catch(() => undefined);
      })
  );
});

// Helper function to determine if a resource should be cached
function shouldCache(url) {
  return url.includes('/images/') || 
         url.includes('/fonts/') || 
         url.includes('.jpg') || 
         url.includes('.png') || 
         url.includes('.svg') || 
         url.includes('.webp') ||
         url.includes('.woff') ||
         url.includes('.woff2');
}

// Remove unused notification and sync features
// Background sync for form submissions (future enhancement)
// Push notifications (future enhancement)
// Notification click handler
