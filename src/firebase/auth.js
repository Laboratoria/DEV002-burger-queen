import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '/src/firebase/firebase-init.js';

export const signIn = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => signOut(auth);
