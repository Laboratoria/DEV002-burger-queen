import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/init.jsx';

export const signIn = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => signOut(auth);
