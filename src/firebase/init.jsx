// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../firebase/config.jsx';
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
