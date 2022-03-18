// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAszsOzP724jFW4UV6UA3ySfD70fmFWIOc",
  authDomain: "cinema-ticket-app-97780.firebaseapp.com",
  databaseURL: "https://cinema-ticket-app-97780-default-rtdb.firebaseio.com",
  projectId: "cinema-ticket-app-97780",
  storageBucket: "cinema-ticket-app-97780.appspot.com",
  messagingSenderId: "899845427199",
  appId: "1:899845427199:web:d9b4067d3fe32e5dd2e1ca",
  measurementId: "G-7R2CXC31VR"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
const auth = firebase.auth();

export default {firebase, database, auth};