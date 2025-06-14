window.onload = () => {
 'use strict';
 if ('serviceWorker' in navigator) {
 navigator.serviceWorker.register('./sw.js')
 .then(() => console.log('Service Worker registered successfully.'))
 .catch((error) => console.error('Service Worker registration failed:', error));
 }
};

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    new Notification("Dzięki za odwiedzenie aplikacji!", {
      body: "To tylko testowa notyfikacja.",
      icon: "images/pwa-icon-128.png"
    });
  }
});
