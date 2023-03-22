import { BsCalendarCheck } from 'react-icons/bs';
import { RxTimer } from 'react-icons/rx';

const PrintOrder = ({ orders }) => {
	// orders.forEach(element => {
	// 	console.log(element);
	// 	console.log(element.createdAt.toDate());
	// });
	return (
		<div className='lg:p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 bg-secoundary-two'>
			{orders.map((order) => (
				<div
					key={order.id}
					className='flex flex-col bg-white rounded-lg shadow-md overflow-hidden'>
					<div className='py-2 px-4 font-semibold text-main bg-secoundary-one'>
						Cliente: {order.client}
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
						<span>Estado: {order.status}</span>
					</div>
					<div className='w-full overflow-x-auto flex-grow'>
						<table className='w-full table-fixed'>
							<thead>
								<tr className='bg-gray-200 text-main-text font-medium border-dotted border-b-4 border-main/60'>
									<th className='w=1/2 px-4 py-2'>Cantidad</th>
									<th className='w=1/2 px-4 py-2'>Producto</th>
								</tr>
							</thead>
							<tbody className='text-center'>
								{order?.products.map((item, index) => (
									<tr
										key={index}
										className={`${
											index % 2 === 0
										} border-solid border-b-2 border-secoundary-one text-main-text font-medium`}>
										<td className='w=1/2 px-4 py-2'>{item.amount}</td>
										<td className='w=1/2 px-4 py-2'>{item.name}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			))}
		</div>
	);
};

export { PrintOrder };
