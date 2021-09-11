import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArxnnXuxRy3wPM8oErQ1KNPAw6iLOP0kg",
    authDomain: "contact-app-9bfcc.firebaseapp.com",
    projectId: "contact-app-9bfcc",
    storageBucket: "contact-app-9bfcc.appspot.com",
    messagingSenderId: "1074115817818",
    appId: "1:1074115817818:web:fa46719977df90628dc363"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;