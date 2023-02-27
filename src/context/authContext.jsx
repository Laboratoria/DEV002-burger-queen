import { createContext, useContext, useState, useEffect } from 'react';
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/Config.jsx';

const authContext = createContext();

export const useAuth = () => {
	const context = useContext(authContext);
	if (!context) throw new Error('There is not auth provider');
	return context;
};

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	const signIn = (email, password) => {
		signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => signOut(auth);

    //Ejecuta algo ni bien carga el componente
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

	return (
		//Lo que estamos ejecutando es:
		<authContext.Provider value={{ signIn, user, logOut }}>
			{children}
		</authContext.Provider>
	);
}
