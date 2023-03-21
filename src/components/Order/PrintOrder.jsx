import {useState} from 'react'
// import {format} from 'date-fns'
import { BsCalendarCheck } from 'react-icons/bs';
import {RxTimer} from 'react-icons/rx'

const PrintOrder = ({ orders }) => {
	// orders.forEach(element => {
	// 	console.log(element);
	// 	console.log(element.createdAt.toDate());
	// });
	return orders.map((order) => (
		<div
			key={order.id}
			className='bg-white border border-main rounded-md shadow-md p-4'>
			<div className='bg-secoundary-one/50'>
				<h2>Cliente: {order.client}</h2>
			</div>
			<div className='bg-secoundary-one/50'>
				<span className='flex flex-row items-center justify-start'> 
					<BsCalendarCheck/>
					<p className='ml-2'>{order.createdAt.toDate().toLocaleDateString()}</p>
				</span>
				<span className='flex flex-row items-center justify-start'>
				<RxTimer/>
				<p className='ml-2'>{order.createdAt.toDate().toLocaleTimeString()}</p>
				</span>
				<p>Status: {order.status}</p>
			</div>
			<ul>
				<h3> Cantidad | Producto </h3>
				{order?.products.map((item) => (
					<li key={item.id}>
						{item.amount} - {item.name}
					</li>
				))}
			</ul>
		</div>
	));
};

export { PrintOrder };
