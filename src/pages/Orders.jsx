import { useState } from 'react';
import { NavBarWaiter } from '/src/components/NavBarWaiter';
import { NavBarMobile } from '/src/components/NavBarMobile';
import { ShortPrintOrder } from '/src/components/Order/ShortPrintOrder';
import { Header } from '/src/components/Header';
import { OrderDetail } from '/src/components/Order/OrderDetail';
import { OrdenBttnStatus } from '/src/components/Order/OrdenBttnStatus';
import { updateOrderStatus } from '/src/firestore/firestore-funct';

const Orders = ({ userEmail, orders, listProducts, setOrders }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);
	const [orderStatus, setStatus] = useState('Pendiente');
	const [showOrderDetails, setShowOrderDetails] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(null);

	// const [orderId, setOrderId] = useState('');
	const statusArray = ['Pendiente', 'Preparando', 'Enviado'];

	const selectStatus = (status) => {
		setStatus(status);
	};

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);
	};

	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
	};

	const changeOrderStatus = async (order) => {
		const newOrderStatus = (order.status = 'Preparando');
		await updateOrderStatus(order.id, {
			status: newOrderStatus,
			deliveringAt: new Date(),
		});
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
			<main className='lg:pl-40 grid lg:grid-cols-2 h-screen'>
				<div className='lg:col-start-1 flex flex-col gap-8'>
					{/* {<Header />} */}
					<Header userEmail={userEmail} />
					<div className='flex justify-start items-center mt-20 ml-10 mb-0'>
						<OrdenBttnStatus statusArray={statusArray} selectStatus={selectStatus} />
					</div>
					<div className=' flex flex-col items-center justify-center m-8'>
						<ShortPrintOrder
							orders={orders.filter((order) => order.status === orderStatus)} setShowOrderDetails={setShowOrderDetails} setSelectedOrder={setSelectedOrder}
						/>
					</div>
				</div>
				<div className='bg-secoundary-one lg:col-start-2 flex flex-col items-center justify-center'>
					{showOrderDetails ? (
						<div className='m-10'>
							<OrderDetail selectedOrder={selectedOrder} changeOrderStatus={changeOrderStatus}/>
						</div>
					) : null}
				</div>
			</main>
		</div>
	);
};

export { Orders };
