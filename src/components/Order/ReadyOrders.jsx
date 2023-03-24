import { useState } from 'react';
import { NavBarWaiter } from '/src/components/NavBarWaiter';
import { PrintOrderMozo } from './PrintOrderMozo';
const ReadyOrders = ({ orders, listProducts, status }) => {
	const [showMenu] = useState(false);

	return (
		<div className='bg-secoundary-two w-full min-h-screen'>
			{/* {<sideBar />} */}
			<NavBarWaiter showMenu={showMenu} />
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
