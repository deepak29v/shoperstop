import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArCdjNZWORoBSlJ9-O6uy1S5jHYx3PQ8o",
    authDomain: "shopper-stop-8a21f.firebaseapp.com",
    projectId: "shopper-stop-8a21f",
    storageBucket: "shopper-stop-8a21f.appspot.com",
    messagingSenderId: "295577324377",
    appId: "1:295577324377:web:42e49770a25b19669f9a48",
    measurementId: "G-437B5288CL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };