import { useState } from 'react';
import { NavBar } from '/src/components/NavBar.jsx';
import { NavBarMobile } from '/src/components/NavBarMobile.jsx';
const Orders = () => {
	const [orderProducts, setorderProducts] = useState([]);
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
			<main>
				<div className='flex flex-col md:flex-col md-justify-between md:items-center h-30 bg-main rounded-tr-2xl'>
					<div></div>
				</div>
			</main>
		</div>
	);
};

export { Orders };
