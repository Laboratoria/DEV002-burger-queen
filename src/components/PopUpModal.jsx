const PopUpModal = ({
	tittle,
	listProducts,
	setListProducts,
	showModal,
	setShowModal,
	mapProductsDe,
}) => {
	const sendOrder = () => {
		console.log({
			mapProductsDe,
			total: listProducts.reduce(
				(total, item) => total + item.price * item.amount,
				0
			),
		});
		setShowModal(false);
		setListProducts([]);
	};
	return (
		<div>
			<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
				<div className='relative w-auto my-6 mx-auto max-w-3xl'>
					{/*content*/}
					<div className='p-8 rounded-3xl bg-secoundary-one shadow-lg relative flex flex-col w-full outline-none focus:outline-none'>
						{/*header*/}
						<div className='flex items-center justify-center'>
							<h3 className='text-2xl'>{tittle}</h3>
						</div>
						{/*body*/}

						{/*footer*/}
						<div className='flex items-center justify-center text-main text-s font-bold p-8'>
							<button
								className='p-2 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all w-40 duration-150 rounded-full bg-secoundary-two'
								type='button'
								onClick={() => setShowModal(false)}>
								Editar
							</button>
							<button
								className='active:bg-emerald-600 font-bold px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-full bg-secoundary-two'
								type='button'
								onClick={() => sendOrder()}>
								Enviar a Cocina
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
		</div>
	);
};

export { PopUpModal };
