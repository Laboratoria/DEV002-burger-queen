// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDCdyzaD9Uc6ZxEjDzpvxYOUQ0seq91ie0',
	authDomain: 'burguer-queen-d2aeb.firebaseapp.com',
	projectId: 'burguer-queen-d2aeb',
	storageBucket: 'burguer-queen-d2aeb.appspot.com',
	messagingSenderId: '336599879146',
	appId: '1:336599879146:web:8e62f09b8fda1f9e8bf693',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
