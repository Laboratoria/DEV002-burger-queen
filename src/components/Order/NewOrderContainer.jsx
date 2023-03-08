// const NewOrderContainer = ({
// 	products,
// 	client,
// 	setClient,
// 	deleteItem,
// 	totalOrder,
// 	sendOrder,
// }) => {
// 	<div className='flex flex-col items-center justify-center space-y-8 space-x-16  w-1/2 m-8 border-2 border-rose-500'>
// 		<h2>Nuevo pedido</h2>
// 		<ul>
// 			{products.map((product) => (
// 				<li key={product.id}>
// 					{product.name} - {product.price}
// 					<button onClick={() => deleteItem(product.id)}>Delete</button>
// 				</li>
// 			))}
// 		</ul>
// 		<p>Total: s/.{totalOrder()}</p>
// 		<input
// 			type='text'
// 			placeholder='nombre del cliente'
// 			value={client}
// 			onChange={(e) => setClient(e.target.value)}
// 		/>
// 		<button onClick={() => sendOrder()}>Hacer pedido</button>
// 	</div>;
// };

// export { NewOrderContainer };
