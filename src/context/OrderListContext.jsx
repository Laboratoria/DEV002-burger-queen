// import { createContext, useState } from 'react';

// export const OrderListContext = createContext();

// const OrderListProvider = ({ children }) => {
// 	const [order, setOrder] = useState({
// 		id: '',
// 		to: '',
// 		items: [],
// 	});

// 	const handleAddItem = (item) => {
// 		setOrder((prevOrder) => ({
// 			...prevOrder,
// 			items: [...prevOrder.items, item],
// 		}));
// 	};

// 	const handleDeleteItem = (item) => {
// 		setOrder((prevOrder) => ({
// 			...prevOrder,
// 			items: [...prevOrder.items.filter((i) => i.id !== item.id)],
// 		}));
// 	};

// 	const totalOrder = order.items.reduce((total, item) => total + item.price, 0);

// 	return (
// 		<OrderListContext.Provider
// 			value={{ order, handleAddItem, handleDeleteItem, totalOrder }}
// 		>
// 			{children}
// 		</OrderListContext.Provider>
// 	);
// };

// export { OrderListProvider };
