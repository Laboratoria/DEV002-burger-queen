import { BsCalendarCheck } from 'react-icons/bs';
import { RxTimer } from 'react-icons/rx';
import { updateOrderStatus } from '/src/firestore/firestore-funct.js';
const PrintOrder = ({ orders }) => {
	// orders.forEach(element => {
	// 	console.log(element);
	// 	console.log(element.createdAt.toDate());
	// });
	const changeOrderStatus = async (order) => {
		const newOrderStatus = (order.status = 'Preparado');
		await updateOrderStatus(order.id, {
			status: newOrderStatus,
			deliveringAt: new Date(),
		});
	};
	
	return (
		<div className='lg:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 bg-secoundary-two'>
			{orders.map((order) => (
				<div
					key={order.id}
					className='flex flex-col bg-white rounded-lg shadow-md overflow-hidden'>
					<div className='flex flex-row items-center justify-between py-2 px-4 font-semibold bg-secoundary-one'>
						<div>
							<span className='text-main'>Cliente: {order.client}</span>
						</div>
					</div>
					<div className='flex flex-wrap items-center justify-between py-2 px-4 font-medium text-main bg-secoundary-two'>
						<span className='flex items-center'>
							<BsCalendarCheck />
							<p className='flex items-center'>
								{order.createdAt.toDate().toLocaleDateString()}
							</p>
						</span>
						<span className='flex items-center'>
							<RxTimer />
							<p className='flex items-center'>
								{order.createdAt.toDate().toLocaleTimeString()}
							</p>
						</span>
					</div>
					<div>
						<table className='w-full table-fixed'>
							<thead>
								<tr className='bg-gray-200 text-main-text font-medium border-dotted border-b-4 border-main/60'>
									<th className='w-1/2 px-4 py-2'>Cantidad</th>
									<th className='w-1/2 px-4 py-2'>Producto</th>
								</tr>
							</thead>
							<tbody className='text-center'>
								{order?.products.map((item, index) => (
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
								onClick={()       =>       changeOrderStatus(order)}
								className='bg-main text-secoundary-one font-bold rounded-lg p-4 cursor-pointer hover:bg-secoundary-one hover:text-main-text'>
								<span>{order.status}</span>
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export { PrintOrder };
