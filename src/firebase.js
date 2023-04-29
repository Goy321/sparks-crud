import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyA5a8vZn3Nop-h6VH5X4N7vJSMT1Rh5CFQ",
    authDomain: "sparks-firebase-4cec6.firebaseapp.com",
    projectId: "sparks-firebase-4cec6",
    storageBucket: "sparks-firebase-4cec6.appspot.com",
    messagingSenderId: "894550511977",
    appId: "1:894550511977:web:12f08702dbeb494a192df8"
  };
  

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();