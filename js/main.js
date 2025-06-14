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

window.onload = () => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('Witaj ponownie!', {
      body: 'Dzięki, że wróciłeś!',
      icon: 'images/cat3.png'
    });
  }
};
