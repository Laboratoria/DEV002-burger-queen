import { BsFillPatchMinusFill, BsFillPatchPlusFill } from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa';

const NewOrderContainer = ({
	listProducts,
	setListProducts,
	addItem,
	mapProductsDe,
	getListFromMap,
	client,
	showOrder,
	setShowOrder,
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
		<div
			className={`lg:col-span-2 fixed mt-0 bg-secoundary-two w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
				showOrder ? 'right-0' : '-right-full'
			}`}>
			<ul className='flex flex-col pt-48 px-6 gap-8 w-full h-full bg-secoundary-one rounded-2xl'>
				{listProducts.map((product) => (
					<li
						key={product.id}
						className='flex flex-row items-center bg-secoundary-two gap-2 w-full rounded-2xl p-4'>
						<div className='flex flex-col text-xl'>
							<span className='gap-2 w-full'>{product.name}</span>
							<span className='flex flex-row items-center space-x-2 text-main-text'>
								<FaMoneyBillWave className='text-2xl text-main' /> 
								<span>{product.price}</span>
							</span>
						</div>
						<div className='flex flex-row items-center ml-24 gap-2'>
							<button
								onClick={() => deleteItem(product)}
								className=' text-secoundary text-center text-2xl cursor-pointer transition-colors'>
								<span className='text-4xl'>
									<BsFillPatchMinusFill />
								</span>
							</button>
							<span className='text-main-text text-xl'>{product.amount}</span>
							<button
								onClick={() => addItem(product)}
								className='rounded-xl text-main group-hover:text-secoundary transition-colors'>
								<span className='text-4xl'>
									<BsFillPatchPlusFill />
								</span>
							</button>
						</div>
					</li>
				))}
				<p className='flex flex-row items-center space-x-2 text-main-text text-2xl'>Total: s/.{totalOrder()}</p>
			<input type='text' placeholder='nombre del cliente' value={client} />
			<button onClick={() => sendOrder()} className='flex flex-col items-center bg-secoundary border-2 border-secoundary-two hover:border-main text-secoundary-one rounded-full p-4 mb-4 text-center text-2xl cursor-pointer'>Hacer pedido</button>
			</ul>
			
		</div>
	);
};

export { NewOrderContainer };
