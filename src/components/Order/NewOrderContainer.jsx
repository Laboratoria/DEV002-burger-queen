import { BsFillPatchMinusFill, BsFillPatchPlusFill } from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useState } from 'react';
const NewOrderContainer = ({
	listProducts,
	setListProducts,
	addItem,
	mapProductsDe,
	getListFromMap,
	client,
}) => {
	const deleteItem = (item) => {
		console.log(item);
		console.log(mapProductsDe);

		// setProducts(mapProductsDe.filter((item) => item.id !== id));
		const amount = mapProductsDe.get(item);
		if (amount === 1) {
			mapProductsDe.delete(item);
		} else {
			mapProductsDe.set(item, parseInt(amount) - 1);
		}
		setListProducts(getListFromMap(mapProductsDe));
	};

	const totalOrder = () => {
		return listProducts.reduce(
			(total, item) => total + item.price * item.amount,
			0
		);
	};

	const sendOrder = () => {
		console.log({
			client,
			mapProductsDe,
			total: totalOrder(),
		});
		setListProducts([]);
	};
	return (
		<div className='lg:col-span-3 fixed lg:static right-0'>
			<ul className='flex flex-col m-8 p-16 gap-8 w-full h-full bg-secoundary-one/50 rounded-lg'>
				{listProducts.map((product) => (
					<li key={product.id} className='flex flex-row items-center gap-2 w-full'>
						<div className='flex flex-col'>
							<span className='gap-2 w-full'>{product.name}</span>
							<span className='flex flex-row'>
								<FaMoneyBillWave className='text-3xl' /> {product.price}
							</span>
						</div>
						<div className='bg-secoundary-two'>
							<button onClick={() => deleteItem(product)}>
								<span className='text-3xl'>
									<BsFillPatchMinusFill />
								</span>
							</button>
							<span>{product.amount}</span>
							<button onClick={() => addItem(product)}>
								<span className='text-3xl'>
									<BsFillPatchPlusFill />
								</span>
							</button>
						</div>
					</li>
				))}
			</ul>
			<p>Total: s/.{totalOrder()}</p>
			<input type='text' placeholder='nombre del cliente' value={client} />
			<button onClick={() => sendOrder()}>Hacer pedido</button>
		</div>
	);
};

export { NewOrderContainer };
