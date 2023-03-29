import { useState } from 'react';
import { NavBarMobile } from '/src/components/NavBarMobile';
import { ShortPrintOrder } from '/src/components/Order/ShortPrintOrder';
import { Header } from '/src/components/Header';
import { OrderDetail } from '/src/components/Order/OrderDetail';
import { OrdenBttnStatus } from '/src/components/Order/OrdenBttnStatus';
import { updateOrderStatus } from '/src/firestore/firestore-funct';
import dataStatus from '/src/dataStatus.json';
import { NavBarWaiter } from '../components/NavBarWaiter';

const OrdersWaiter = ({ userEmail, orders }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);
	const [orderStatus, setStatus] = useState('Pendiente');
	const [showOrderDetails, setShowOrderDetails] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(null);
	const [clean, setClean] = useState([]);

	const statusArray = ['Pendiente', 'Enviado', 'Entregado', 'Cancelado'];

	const selectStatus = (status) => {
		setClean([]);
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

	const changeOrderStatusCanceled = async (order) => {
		const newOrderStatus = (order.status = 'Cancelado');
		await updateOrderStatus(order.id, {
			status: newOrderStatus,
			canceledAt: new Date(),
		});
	};

	const changeOrderStatusDelivered = async (order) => {
		const newOrderStatus = (order.status = 'Entregado');
		await updateOrderStatus(order.id, {
			status: newOrderStatus,
			deliveredAt: new Date(),
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
			{/* {<Header />} */}
			<Header userEmail={userEmail} />
			<main className='lg:pl-28 grid lg:grid-cols-2 h-screen'>
				<div className='lg:col-start-1 flex flex-col gap-8'>
					
					<div className='flex justify-center items-center mt-10 mb-0'>
						<OrdenBttnStatus statusArray={statusArray} selectStatus={selectStatus} />
					</div>
					<div className=' flex flex-col items-center justify-center m-8'>
						<ShortPrintOrder
							orders={orders.filter((order) => order.status === orderStatus)}
							setShowOrderDetails={setShowOrderDetails}
							setSelectedOrder={setSelectedOrder}
						/>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					{showOrderDetails ? (
						orderStatus === 'Pendiente' ? (
							<div className='flex items-start justify-center mt-[-35rem] mr-20'>
								<OrderDetail
									selectedOrder={selectedOrder}
									changeOrderStatus={changeOrderStatusCanceled}
									userEmail={userEmail}
								/>
							</div>
						) : orderStatus === 'Enviado' ? (
							<div className='m-10'>
								<OrderDetail
									selectedOrder={selectedOrder}
									changeOrderStatus={changeOrderStatusDelivered}
									userEmail={userEmail}
								/>
							</div>
						) : orderStatus === 'Entregado' ? (
							<div className='m-10'>
								<OrderDetail selectedOrder={selectedOrder} userEmail={userEmail} />
							</div>
						) : orderStatus === 'Cancelado' ? (
							<div className='m-10'>
								<OrderDetail selectedOrder={selectedOrder} userEmail={userEmail} />
							</div>
						) : null
					) : null}
				</div>
			</main>
		</div>
	);
};

export { OrdersWaiter };
