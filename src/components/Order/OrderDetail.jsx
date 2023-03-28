//import { useState } from 'react';
import { BsCalendarCheck } from 'react-icons/bs';
import { RxTimer } from 'react-icons/rx';
// import { updateOrderStatus } from '/src/firestore/firestore-funct';
// import {PopUpModal} from '../PopUpModal'
// import { useState, useEffect } from 'react';
// import { addOrder } from '/src/firestore/firestore-funct';
const OrderDetail = ({ selectedOrder, changeOrderStatus, userEmail }) => {
	// const [showModal, setShowModal] = useState(false)
	// const [showModal, setShowModal] = useState(false);
	// const changeOrderStatus = async (order) => {
	// 	const newOrderStatus = (order.status = 'Preparando');
	// 	await updateOrderStatus(order, {
	// 		status: newOrderStatus,
	// 		deliveringAt: new Date(),
	// 	});
	// };

	return (
		<div>
			<div
				key={selectedOrder.id}
				className='flex flex-col bg-white rounded-lg shadow-md overflow-hidden'>
				<div className='flex flex-row items-center justify-between py-2 px-4 font-semibold bg-secoundary-two'>
				
						<span className='text-main text-xl'>Cliente: {selectedOrder.client}</span>
						<span className='flex items-center'>
							
						<BsCalendarCheck />
						<p className='flex items-center'>
							{selectedOrder.createdAt.toDate().toLocaleDateString()}
						</p>
					</span>
				
					
				</div>
				<div className='flex flex-wrap items-center justify-between py-2 px-4 font-medium text-main bg-secoundary-two'>
				
					<span className='flex items-center'>
					<p>Ingresado</p>
						<RxTimer />
						<p className='flex items-center'>
							{selectedOrder.createdAt.toDate().toLocaleTimeString()}
						</p>
					</span>
						{selectedOrder.cookingAt ? (
							<span className='flex items-center'>
					<p>Preparando</p>
						<RxTimer />
						<p className='flex items-center'>
							{selectedOrder.cookingAt.toDate().toLocaleTimeString()}
						</p>
						</span>
	): null}
	{selectedOrder.sendAt ? (
							<span className='flex items-center'>
					<p>Enviado</p>
						<RxTimer />
						<p className='flex items-center'>
							{selectedOrder.sendAt.toDate().toLocaleTimeString()}
						</p>
						</span>
	): null}
					
				</div>
				<div>
					<table className='w-full table-fixed bg-secoundary-two'>
						<thead>
							<tr className='bg-gray-200 text-main-text font-medium border-dotted border-b-4 border-main/60'>
								<th className='w-1/2 px-4 py-2'>Cantidad</th>
								<th className='w-1/2 px-4 py-2'>Producto</th>
							</tr>
						</thead>
						<tbody className='text-center'>
							{selectedOrder?.products.map((item, index) => (
								<tr
									key={index}
									className={`${
										index % 2 === 0
									} border-solid border-b-2 border-secoundary-one text-main-text font-medium overflow-y-scroll`}>
									<td className='w-1/2 px-4 py-2'>{item.amount}</td>
									<td className='w-1/2 px-4 py-2'>{item.name}</td>
								</tr>
							))}
						</tbody>
					</table>
					<div className='flex flex-col content-end justify-end mt-10'>
						{selectedOrder.status === 'Cancelado' ? (
							<button
								type='button'
								className='bg-main text-secoundary-one opacity-50 font-bold rounded-lg p-4 cursor-not-allowed'>
								<span>Cancelado</span>
							</button>
						) : userEmail === 'patricio_mozo@restaurant.pe' ? (
							<button
								type='button'
								onClick={() => changeOrderStatus(selectedOrder)}
								className='bg-main text-secoundary-one font-bold rounded-lg p-4 cursor-pointer hover:bg-secoundary-one hover:text-main-text'>
								{selectedOrder.status === 'Pendiente' ? (
									<span>Cancelar</span>
								) : selectedOrder.status === 'Enviado' ? (
									<span>Entregar</span>
								) : null}
							</button>
						) : null}
						{selectedOrder.status === 'Enviado' ? (
							<button
								type='button'
								className='bg-main text-secoundary-one opacity-50 font-bold rounded-lg p-4 cursor-not-allowed'>
								<span>Enviado</span>
							</button>
						) : userEmail === 'fernando_cheff@restaurant.pe' ? (
							<button
								type='button'
								onClick={() => changeOrderStatus(selectedOrder)}
								className='bg-main text-secoundary-one font-bold rounded-lg p-4 cursor-pointer hover:bg-secoundary-one hover:text-main-text'>
								{selectedOrder.status === 'Pendiente' ? (
									<span>Preparar</span>
								) : selectedOrder.status === 'Preparando' ? (
									<span>Enviar</span>
								) : null}
							</button>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export { OrderDetail };
