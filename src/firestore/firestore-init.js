import { app } from '/src/firebase/firebase-init.js';

import {
	getFirestore,
	serverTimestamp,
	addDoc,
	collection,
	query,
	orderBy,
	getDocs,
	onSnapshot,
	doc,
	getDoc,
	updateDoc,
} from 'firebase/firestore';

const db = getFirestore(app);
const ordersCollection = collection(db, 'orders');
const q = query(ordersCollection, orderBy('createdAt', 'desc'));

export {
	db,
	ordersCollection,
	q,
	collection,
	query,
	orderBy,
	serverTimestamp,
	addDoc,
	getDocs,
	onSnapshot,
	doc,
	getDoc,
	updateDoc,
};
