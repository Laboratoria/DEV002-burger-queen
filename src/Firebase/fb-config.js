// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVsxPY6atr0bq03GE3YdXcbV01vqoX-y8",
  authDomain: "lasagnahouse.firebaseapp.com",
  projectId: "lasagnahouse",
  storageBucket: "lasagnahouse.appspot.com",
  messagingSenderId: "312519870519",
  appId: "1:312519870519:web:8aca7e8038faabddae57b2",
  measurementId: "G-ZY09HJKYX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);