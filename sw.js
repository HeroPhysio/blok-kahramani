/* Hero Block yeni adresine taşındı (heroblock.herouygulama.com.tr).
   Bu hizmet çalışanı eski adresteki çevrimdışı kopyayı siler ve kendini kaldırır. */
'use strict';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('blok-kahramani-')).map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
});
