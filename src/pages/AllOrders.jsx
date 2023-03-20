import { useState } from 'react';
import { NavBar } from '/src/components/NavBar.jsx';
import { NavBarMobile } from '/src/components/NavBarMobile.jsx';
import { PrintOrder } from '/src/components/Order/PrintOrder.jsx';

const AllOrders = ({ userEmail, orders, listProducts }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);
	};

	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
	};

	return (
		<div className='bg-secoundary-two w-full min-h-screen'>
			{/* {<sideBar />} */}
			<NavBar showMenu={showMenu} />
			{/* {<Mobile />} */}
			<NavBarMobile
				toggleMenu={toggleMenu}
				toggleOrders={toggleOrders}
				showMenu={showMenu}
			/>
			<main className='pt-10'>
				<div className='lg:pl-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center m-8'>
					
						<PrintOrder orders={orders} listProducts={listProducts} />
					
				</div>
			</main>
		</div>
	);
};

export { AllOrders };
