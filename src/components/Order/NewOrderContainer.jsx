import { BsFillPatchMinusFill, BsFillPatchPlusFill, BsFillClipboard2PlusFill } from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa';
// import {PopUpModal} from '../PopUpModal'
import {useState} from 'react'
import { addOrder } from '../../firestore/firestore-funct';
const NewOrderContainer = ({
	listProducts,
	setListProducts,
	addItem,
	mapProductsDe,
	getListFromMap,
	showOrder
}) => {
	// const [showModal, setShowModal] = useState(false)
	const [client, setClient] = useState('')
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

  // const handleClick = () => {
  //   setMostrarPopup(true);
  // }

  // const handleClose = () => {
  //   setMostrarPopup(false);
  // }

  // const handleEnviar = () => {
  //   handleClose();
  // }
	const totalOrder = listProducts.reduce(
			(total, item) => total + item.price * item.amount,
			0
		);
		
	const sendOrder = () => {
		if(mapProductsDe.size === 0) {
			alert("Por favor, seleciona algún producto a la nueva orden")
		} else if (client === '') {
			alert("Por favor, agrega el nombre del cliente")
		} else {
			addOrder(client, mapProductsDe, totalOrder)
			setListProducts([]);
			setClient(null)
		}
		console.log({
			client,
			mapProductsDe,
			totalOrder,
		});
		// setShowModal(false);
		
	};

const handleClientChange  = (e) => {
setClient(e.target.value)
}

	return (
		<div
			className={`lg:col-span-3 fixed mt-0 bg-secoundary-two w-full lg:w-2/5 lg:right-0 h-full overflow-y-scroll transition-all z-50 ${
				showOrder ? 'right-0' : '-right-full'
			}`}>
			<div className='flex flex-col md:flex-col md-justify-between md:items-center h-30 bg-main rounded-tr-2xl'>
				<img
					src='src/assets/Logo-2-ñaña.png'
					className='w-1/3 '
					alt='LogoÑaña'
				/>
			</div>
			{/*
			<div className='flex items-center justify-center w-full h-full bg-secoundary-one'>
			<button onClick = {()=> startNewOrder(showOrder)}
					className='rounded-xl text-main group-hover:text-secoundary transition-colors'>
					<span>
						<BsFillClipboard2PlusFill className='text-9xl' />
					</span>
				</button>
			</div> */}
			<ul className='flex flex-col pt-8 px-6 gap-4 w-full h-full bg-secoundary-one'>
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
					Total: s/.{totalOrder}
				</p>
				<input id='idClient' type='text' placeholder='nombre del cliente' value={client} onChange={handleClientChange}/>
				<button
					 onClick={() => sendOrder()}>
					Hacer pedido
				</button>
				{/* {showModal ? (
					<PopUpModal tittle = 'Verifica el pedido y luego envía a cocina' listProducts = {listProducts} setListProducts={setListProducts} showModal={showModal} setShowModal={setShowModal} mapProductsDe={mapProductsDe}/>
				) : null} */}
			</ul>
		</div>
	);
};

export { NewOrderContainer };
