import {
	BsFillPatchMinusFill,
	BsFillPatchPlusFill,
	BsFillClipboard2PlusFill,
} from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa';
const NewOrderContainer = ({
	listProducts,
	addItem,
	deleteItem,
	showOrder,
	totalOrder,
	sendOrder,
	client,
	setClient,
}) => {
	const handleClientChange = (e) => {
		setClient(e.target.value);
	};

	return (
		<div className='flex flex-col items-center justify-center'>
			<input
						id='idClient'
						type='text'
						placeholder='Nombre del cliente'
						value={client}
						onChange={handleClientChange}
						className='py-2 border-b border-main text-main-text px-1 outline-none mt-2 mb-6 placeholder-main-text/70 text-center'
					/>
			<ul className='flex flex-col items-center h-[40rem] w-full border-main border-4 overflow-scroll mt-18 p-2 rounded-3xl'>
				{totalOrder === 0 ? (
					<button className='text-main group-hover:text-secoundary transition-colors opacity-50'>
						<span className=''>
							<BsFillClipboard2PlusFill className='text-8xl' />
						</span>
					</button>
				) : (
					listProducts.map((product) => (
						<li
							key={product.id}
							className='flex flex-row items-start gap-2 w-full rounded-2xl p-4'>
								<div className='flex flex-row items-center justify-center mr-4 gap-2'>
								<button
									onClick={() => deleteItem(product)}
									className=' text-secoundary text-center text-2xl cursor-pointer transition-colors'>
									<span className='text-4xl'>
										<BsFillPatchMinusFill />
									</span>
								</button>
								<span className='text-main-text text-xl text-right'>{product.amount}</span>
								<button
									onClick={() => addItem(product)}
									className='rounded-xl text-main group-hover:text-secoundary transition-colors'>
									<span className='text-4xl'>
										<BsFillPatchPlusFill />
									</span>
								</button>
							</div>
							<div className='flex text-xl'>
								<span className='flex space-x-2 text-main-text'>{product.name}</span>
								<span className='flex items-end justify-end space-x-2 text-main-text'>
									<FaMoneyBillWave className='text-2xl text-main' />
									<p>{product.price}</p>
								</span>
							</div>
							
						</li>
					))
				)}
			</ul>
		
			<div className='flex flex-col items-center justify-end w-5/6'>
				<div className='flex items-center justify-end gap-4 text-main-text text-2xl my-4'>
					<p>Total: </p>
					<p>s/.{totalOrder}</p>
					</div>
					<button
						onClick={() => sendOrder()}
						className='px-8 bg-main text-secoundary-two text-xl rounded-full w-1/2 h-14'>
						Hacer pedido
					</button>
				</div>
		</div>
	);
};

export { NewOrderContainer };
