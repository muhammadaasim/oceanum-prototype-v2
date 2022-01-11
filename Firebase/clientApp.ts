// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOZqFniR3c8He0y9HzMGHJlva5oumgvoU",
  authDomain: "oceanum-68e8e.firebaseapp.com",
  projectId: "oceanum-68e8e",
  storageBucket: "oceanum-68e8e.appspot.com",
  messagingSenderId: "110377629694",
  appId: "1:110377629694:web:b02a5856d1a39e953832af",
  measurementId: "G-J5SGGN8LLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);