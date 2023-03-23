import { BsCalendarCheck } from 'react-icons/bs';
import { IoTicket } from 'react-icons/io5';
import { RxTimer } from 'react-icons/rx';
// import { updateOrderStatus } from '/src/firestore/firestore-funct.js';
const ShortPrintOrder = ({ orders, setShowOrderDetails }) => {
	// const changeOrderStatus = async (order) => {
	// 	const newOrderStatus = (order.status = 'Preparado');
	// 	await updateOrderStatus(order.id, {
	// 		status: newOrderStatus,
	// 		deliveringAt: new Date(),
	// 	});
	// };

	return (
		<div className='flex flex-col items-center justify-between gap-8'>
			{orders.map((order) => (
				<div key={order.id} className='rounded-lg shadow-md overflow-hidden w-full'>
					<div className='flex flex-row items-center justify-between gap-8 py-4 px-4 font-semibold bg-secoundary-one text-main text-xl'>
						<button
							onClick={() => setShowOrderDetails(true)}
							className='flex items-center justify-center bg-main rounded-lg p-4 text-secoundary-two'>
							<span className='flex items-center gap-4'>
								<IoTicket className='text-4xl' />
								<p className='text-2xl'>{order.client}</p>
							</span>
						</button>
						<div>
							<span className='flex items-center justify-start gap-2'>
								<BsCalendarCheck className='' />
								<p className=''>{order.createdAt.toDate().toLocaleDateString()}</p>
							</span>
							<span className='flex items-center gap-2'>
								<RxTimer />
								<p className=''>{order.createdAt.toDate().toLocaleTimeString()}</p>
							</span>
						</div>
					</div>
					<div className='flex flex-wrap items-center justify-between py-2 px-4 font-medium text-main bg-secoundary-two'></div>
					<div className='flex items-center justify-center'>
						<button
							type='button'
							onClick={() => changeOrderStatus(order)}
							className='bg-main text-secoundary-one font-bold rounded-lg p-4 cursor-pointer hover:bg-secoundary-one hover:text-main-text'>
							<span className='flex items-center'>{order.status}</span>
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export { ShortPrintOrder };
