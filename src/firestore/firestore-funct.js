import {
	addDoc,
	serverTimestamp,
	ordersCollection,
	onSnapshot,
	q,
} from '/src/firestore/firestore-init.js';

export const addOrder = async (client, products, total) => {
	try {
		await addDoc(ordersCollection, {
			createdAt: serverTimestamp(),
			client: client,
			products: products,
			total: total,
			status: 'Pendiente',
		}).then(() => {
			alert('Orden enviada');
		});
	} catch (error) {
		console.log(error);
	}
};

export const onGetOrders = (callback) => onSnapshot(q, callback);
