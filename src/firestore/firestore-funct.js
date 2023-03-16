import {
	addDoc,
	serverTimestamp,
	ordersCollection,
	onSnapshot,
	q,
} from '/src/firestore/firestore-init.js';

export const addOrder = async (orderId, products, total) => {
	try {
		await addDoc(ordersCollection, {
			createdAt: serverTimestamp(),
			orderId: orderId,
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
