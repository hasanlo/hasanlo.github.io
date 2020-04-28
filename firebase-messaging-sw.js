importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.1/firebase-analytics.js"
);
console.log("hello");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAB2oWgbAABZk4Tt3Frtook6rLTDQLqCNY",
  authDomain: "test-a5f4c.firebaseapp.com",
  databaseURL: "https://test-a5f4c.firebaseio.com",
  projectId: "test-a5f4c",
  storageBucket: "test-a5f4c.appspot.com",
  messagingSenderId: "787077928633",
  appId: "1:787077928633:web:9812c4cdf1e98a41f46d68",
  measurementId: "G-XDGK8685J5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  return self.registration.showNotification();
});
