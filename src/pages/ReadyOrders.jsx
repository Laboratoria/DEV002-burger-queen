import { useState } from 'react';
import { NavBarMozo } from '../components/NavBarMozo.jsx';
import { PrintOrderMozo } from '../components/Order/PrintOrderMozo.jsx';
const ReadyOrders = ({ userEmail, orders, listProducts }) => {
	const [showMenu] = useState(false);

	return (
		<div className='bg-secoundary-two w-full min-h-screen'>
			{/* {<sideBar />} */}
			<NavBarMozo showMenu={showMenu} />
			<main className='pt-10'>
				<div className='lg:pl-28'>
					<PrintOrderMozo
						orders={orders.filter((order) => order.status === 'Enviado')}
						listProducts={listProducts}
					/>
				</div>
			</main>
		</div>
	);
};

export { ReadyOrders };
