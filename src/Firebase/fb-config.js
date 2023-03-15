// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM48A5ZLUW-KSXxSWw4gXWY2CYtznRXY4",
  authDomain: "lasagnahouse-8256f.firebaseapp.com",
  projectId: "lasagnahouse-8256f",
  storageBucket: "lasagnahouse-8256f.appspot.com",
  messagingSenderId: "1071398228744",
  appId: "1:1071398228744:web:b705f91ca7a40d92d212bd",
  measurementId: "G-CG8ZDEKW7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;