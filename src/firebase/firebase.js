import firebaseConfig from "./firebase-config";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  addDoc,
  Timestamp,
  updateDoc,
  doc,
  query,
  orderBy,
  where,

} from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logoutUser = async () => {
  return await signOut(auth);
};

const orderCollection = collection(db, "NewOrder");

// const addOrder = (client, order, time) => addDoc(orderCollection, {
//  client, order, time
// })

export {
  loginUser,
  logoutUser,
  orderCollection,
  Timestamp,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  db,
  query,
  orderBy,
  where,
};
