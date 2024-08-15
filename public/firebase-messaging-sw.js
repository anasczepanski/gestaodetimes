importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCql10VFWN-dfVKT-3hYfHgyM0Ng9vMClQ",
    authDomain: "gestao-times.firebaseapp.com",
    projectId: "gestao-times",
    storageBucket: "gestao-times.appspot.com",
    messagingSenderId: "161931863200",
    appId: "1:161931863200:web:07dd3f12bfcc37219795c5",
    measurementId: "G-R9D2B7Q9CT"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // Substitua pelo caminho do seu ícone
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});