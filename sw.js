/**
 * WebCode Service Worker
 * Manages static shell cache and offline CacheStorage ('webcode-wasm-v1').
 * Strictly < 120 lines.
 */
const SHELL_CACHE = 'webcode-cache-v2';
const WASM_CACHE = 'webcode-wasm-v1';

const STATIC_ASSETS = [
  '/',
  '/editor/',
  '/manifest.json',
  '/favicon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== SHELL_CACHE && key !== WASM_CACHE) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

function isWasmOrRuntimeAsset(url) {
  return (
    url.includes('/pyodide/') ||
    url.includes('sql-wasm') ||
    url.includes('wasmoon') ||
    url.includes('@ruby/') ||
    url.includes('ruby.wasm') ||
    /\.(wasm|whl|zip)(\?.*)?$/i.test(url) ||
    url.includes('pyodide-lock.json')
  );
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = event.request.url;

  // 1. Navigation requests (HTML pages): Network-first with cache fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(async () => {
        const cache = await caches.open(SHELL_CACHE);
        return (await cache.match(event.request)) || 
               (await cache.match('/editor/')) || 
               (await cache.match('/')) || 
               new Response('<h1>WebCode Offline</h1><p>Please check your connection.</p>', {
                 headers: { 'Content-Type': 'text/html' }
               });
      })
    );
    return;
  }

  // 2. WASM & Binary Runtime Assets: Cache-first for instant offline cold starts
  if (isWasmOrRuntimeAsset(url)) {
    event.respondWith(
      caches.open(WASM_CACHE).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;

        try {
          const networkRes = await fetch(event.request, { mode: 'cors' });
          if (networkRes.ok) {
            cache.put(event.request, networkRes.clone());
          }
          return networkRes;
        } catch (err) {
          if (cached) return cached;
          throw err;
        }
      })
    );
    return;
  }

  // 3. Static Assets: Network-first with cache fallback
  event.respondWith(
    caches.open(SHELL_CACHE).then(async (cache) => {
      try {
        const networkResponse = await fetch(event.request);
        if (networkResponse.ok && event.request.url.startsWith(self.location.origin)) {
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      } catch (err) {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        throw err;
      }
    })
  );
});
