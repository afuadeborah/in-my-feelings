import firebase from 'firebase';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDxeg8E-TFGagF4wiD2mBAYvAS99DQM7GQ",
    authDomain: "in-my-feelings-project-5.firebaseapp.com",
    databaseURL: "https://in-my-feelings-project-5.firebaseio.com",
    projectId: "in-my-feelings-project-5",
    storageBucket: "in-my-feelings-project-5.appspot.com",
    messagingSenderId: "103066453618",
    appId: "1:103066453618:web:00facc82634cc68e0624eb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;