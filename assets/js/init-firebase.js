src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js";
src="https://www.gstatic.com/firebasejs/7.4.0/firebase-storage.js";
src="https://www.gstatic.com/firebasejs/7.4.0/firebase-auth.js";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCUZGzz2tswyjhC2jOZvAKu4CxAoz1736w",
    authDomain: "artwear-f07b8.firebaseapp.com",
    databaseURL: "https://artwear-f07b8.firebaseio.com",
    projectId: "artwear-f07b8",
    storageBucket: "artwear-f07b8.appspot.com",
    messagingSenderId: "927066106954",
    appId: "1:927066106954:web:a2294077cb2eff922a4ab3",
    measurementId: "G-R7MJN4MGP2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const analytics = firebase.analytics();
  const db = firebase.firestore();
  const functions = firebase.functions();
  const auth = firebase.auth();

      