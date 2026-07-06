// sw.js - Progressive Web App (PWA) Service Worker for RMS Foundation
const CACHE_NAME = 'rms-foundation-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './index.css',
  './script.js',
  './data.js',
  './ai_widget.js',
  './i18n.js',
  './join.html',
  './drone_hub.html',
  './mobile_hospitals.html',
  './energy_shield.html',
  './veteran_business.html',
  './donor_hub.html',
  './legal_aid.html',
  './animals_rescue.html',
  './children_future.html',
  './eco_defense.html',
  './map.html',
  './support.html',
  './admin.html',
  './admin.js',
  './admin.css',
  './logo.png',
  './favicon.png'
];

// Install Event - Cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching core foundation assets...');
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('[Service Worker] Some assets failed to cache:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Serve from cache first, then network fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Optionally cache dynamically fetched pages
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback for HTML navigation when offline
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
