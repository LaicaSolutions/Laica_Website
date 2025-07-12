// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDvtPwBQ1iDj45UQJzYHhh0aS2sj1vwijg",

  authDomain: "site-da-laica.firebaseapp.com",

  projectId: "site-da-laica",

  storageBucket: "site-da-laica.firebasestorage.app",

  messagingSenderId: "137983436572",

  appId: "1:137983436572:web:2527c90dd0cf750676bcd9",

  measurementId: "G-B43ZCK59ZB"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Inicializa Firestore
export const db = getFirestore(app);