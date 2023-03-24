//import { useState } from 'react';
import { BsCalendarCheck } from 'react-icons/bs';
import { RxTimer } from 'react-icons/rx';
// import { updateOrderStatus } from '/src/firestore/firestore-funct';
// import {PopUpModal} from '../PopUpModal'
// import { useState, useEffect } from 'react';
// import { addOrder } from '/src/firestore/firestore-funct';
const OrderDetail = ({ selectedOrder, changeOrderStatus }) => {
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
					<div>
						<span className='text-main'>Cliente: {selectedOrder.client}</span>
					</div>
				</div>
				<div className='flex flex-wrap items-center justify-between py-2 px-4 font-medium text-main bg-secoundary-two'>
					<span className='flex items-center'>
						<BsCalendarCheck />
						<p className='flex items-center'>
							{selectedOrder.createdAt.toDate().toLocaleDateString()}
						</p>
					</span>
					<span className='flex items-center'>
						<RxTimer />
						<p className='flex items-center'>
							{selectedOrder.createdAt.toDate().toLocaleTimeString()}
						</p>
					</span>
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
						<button
							type='button'
							onClick={() => changeOrderStatus(selectedOrder)}
							className='bg-main text-secoundary-one font-bold rounded-lg p-4 cursor-pointer hover:bg-secoundary-one hover:text-main-text'>
							<span>{selectedOrder.status}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { OrderDetail };
