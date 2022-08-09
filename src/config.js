// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import mongoose from "mongoose";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSTALy3gKCt3CKW3_H2EdXFzQGkGNPClw",
  authDomain: "village-register.firebaseapp.com",
  projectId: "village-register",
  storageBucket: "village-register.appspot.com",
  messagingSenderId: "531779215219",
  appId: "1:531779215219:web:65dce04ea938678708ef06",
  measurementId: "G-WFCXCR6N0N"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)




export {app, auth, db, storage}