import {
	db,
	addDoc,
	serverTimestamp,
	onSnapshot,
	ordersCollection,
	q,
	updateDoc,
	doc,
} from '/src/firestore/firestore-init';
// import dataStatus from '/src/dataStatus.json';

export const addOrder = async (client, products, total) => {
	const newOrderContent = {
		createdAt: serverTimestamp(),
		client: client,
		products: products,
		total: total,
		status: 'Pendiente',
	};
	try {
		await addDoc(ordersCollection, newOrderContent	
		).then(() => {
			alert('Orden enviada');
		});
	} catch (error) {
		console.log(error);
	}
};

export const onGetOrders = (callback) => onSnapshot(q, callback);

// export const editOrderStatus = (id, newOrderStatus) =>
// 	updateDoc(doc(db, 'orders', id), newOrderStatus);

export const updateOrderStatus = async (id, newOrderStatus) =>
	await updateDoc(doc(db, 'orders', id), newOrderStatus);


