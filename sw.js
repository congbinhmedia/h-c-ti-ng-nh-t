const CACHE_NAME = 'jlpt-master-v1';
// Danh sách các file cần lưu để chạy offline
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './data.json'
];

// Cài đặt Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Cập nhật dữ liệu mới nhất
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});