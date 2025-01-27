// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFWxU9r77yvFbrziFDG-NrlSwcEPd6cqI",
  authDomain: "ccpur-d28ce.firebaseapp.com",
  projectId: "ccpur-d28ce",
  storageBucket: "ccpur-d28ce.firebasestorage.app",
  messagingSenderId: "716030832603",
  appId: "1:716030832603:web:2bb9e6dc3546816e6c01fe",
  measurementId: "G-5JPT47JS2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);