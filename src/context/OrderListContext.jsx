import { createContext } from 'react';

export const OrderListContext = createContext(null);

const OrderListContextProvider = (props) => {
	const [cartItems, setCartItems] = useState({});

	const addToOrder = () => {};
	return (
		<OrderListContext.Provider> {props.children} </OrderListContext.Provider>
	);
};

export { OrderListContextProvider };
