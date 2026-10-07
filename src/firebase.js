// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7d7WdUzlwaWIFUrSgROTMyWW8GgVmEug",
  authDomain: "clone-d11a9.firebaseapp.com",
  projectId: "clone-d11a9",
  storageBucket: "clone-d11a9.firebasestorage.app",
  messagingSenderId: "732435740204",
  appId: "1:732435740204:web:7005e6d443fc618c7c8389",
  measurementId: "G-FEK9VV1JB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);