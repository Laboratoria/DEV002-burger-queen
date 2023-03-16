// import { BsFillClipboard2PlusFill } from 'react-icons/bs';
// import { NewOrderContainer } from '../components/Order/NewOrderContainer';
// import { useState } from 'react';

// const NewOrder = ({ showOrder, setShowOrder }) => {
// 	const [mapProducts] = useState(new Map());
// 	const [listProducts, setListProducts] = useState([]);

// 	const getListFromMap = (mapItems) => {
// 		const auxList = [];
// 		mapItems.forEach((value, key) => {
// 			key.amount = value;
// 			auxList.push(key);
// 		});

// 		return auxList;
// 	};

// 	const addItem = (item) => {
// 		// setProducts([...mapProducts, item]);
// 		if (mapProducts.get(item)) {
// 			mapProducts.set(item, mapProducts.get(item) + 1);
// 		} else {
// 			mapProducts.set(item, 1);
// 		}
// 		setListProducts(getListFromMap(mapProducts));
// 	};

// 	const sendOrder = () => {
// 		console.log({
// 			client,
// 			mapProductsDe,
// 			total: totalOrder(),
// 		});
// 		setListProducts([]);
// 	};

// 	return (
// 		<div>
// 			<ul className='flex flex-col pt-8 px-6 gap-4 w-full h-full bg-secoundary-one'>
				{listProducts.map((product) => (
					<li
						key={product.id}
						className='flex flex-row items-center justify-between bg-secoundary-two gap-2 w-full rounded-2xl p-4'>
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
				<p className='flex flex-row items-center space-x-2 text-main-text text-2xl'>
					Total: s/.{totalOrder()}
				</p>
				<input type='text' placeholder='nombre del cliente' value={client} />
				<button
					 onClick={() => setShowModal(true)}>
					Hacer pedido
				
				</button>
				{showModal ? (
					<PopUpModal tittle = 'Verifica el pedido y luego envía a cocina' setShowModal = {setShowModal} />
				) : null}
			</ul>
// 		</div>
// 	);
// };

// export { NewOrder };
