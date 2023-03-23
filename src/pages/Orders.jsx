import { useState } from 'react';
import { NavBarWaiter } from '/src/components/NavBarWaiter.jsx';
import { NavBarMobile } from '/src/components/NavBarMobile.jsx';
import { ShortPrintOrder } from '/src/components/Order/ShortPrintOrder.jsx';
import { Header } from '/src/components/Header.jsx';
import { Status } from '/src/components/Order/Status.jsx';
import { OrdenBttnStatus } from '/src/components/Order/OrdenBttnStatus.jsx';
const Orders = ({ userEmail, orders, listProducts, setOrders }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);
	const [status, setStatus] = useState('Pendiente');
	const [showOrderDetails, setShowOrderDetails] = useState(false);
	const [orderId, setOrderId] = useState('');
	// const [mapOrders] = useState(new Map());

	const statusArray = ['Pendiente', 'Preparando', 'Enviado'];

	const selectStatus = (status) => {
		setStatus(status);
	};

	const ChangeOrderId = (orderId) => {
		setOrderId(orderId);
	};

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
			<NavBarWaiter showMenu={showMenu} />
			{/* {<Mobile />} */}
			<NavBarMobile
				toggleMenu={toggleMenu}
				toggleOrders={toggleOrders}
				showMenu={showMenu}
			/>
			<main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>
				<div className='lg:col-span-3 flex flex-col gap-8'>
					{/* {<Header />} */}
					<Header userEmail={userEmail} />
					<div className='flex justify-start items-center mt-20 ml-10 mb-0'>
						<OrdenBttnStatus statusArray={statusArray} selectStatus={selectStatus} />
					</div>

					<div className='flex flex-col items-center justify-center m-8'>
						<ShortPrintOrder
							orders={orders.filter((order) => order.status === status)}
							setShowOrderDetails={setShowOrderDetails}
						/>
					</div>
				</div>
				{showOrderDetails ? (
					<div className='lg:col-span-5'>
						<Status setOrderId={setOrderId} />
					</div>
				) : null}
			</main>
		</div>
	);
};

export { Orders };
