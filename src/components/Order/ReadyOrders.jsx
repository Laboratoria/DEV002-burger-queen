import { useState } from 'react';
import { NavBarMozo } from '/src/components/NavBarMozo.jsx';
import { PrintOrderMozo } from './PrintOrderMozo.jsx';
const ReadyOrders = ({ orders, listProducts, status }) => {
	const [showMenu] = useState(false);

	return (
		<div className='bg-secoundary-two w-full min-h-screen'>
			{/* {<sideBar />} */}
			<NavBarMozo showMenu={showMenu} />
			<main className='pt-10'>
				<div className='lg:pl-28'>
					<PrintOrderMozo
						orders={orders.filter((order) => order.status === 'Preparado')}
						listProducts={listProducts}
					/>
				</div>
			</main>
		</div>
	);
};

export { ReadyOrders };
