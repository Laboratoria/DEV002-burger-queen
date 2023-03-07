import { ProductButton } from '../Menu/ProductButton';
import { ProductsContainer } from '../Menu/ProductsContainer';
import products from '/src/products.json';

const MenuRefrescos = () => {
	return (
		<div>
			<ProductsContainer>
				{products.refrescos.map((product) => (
					<ProductButton
						key={product.id}
						name={product.name}
						price={product.price}
					/>
				))}
			</ProductsContainer>
		</div>
	);
};

export { MenuRefrescos };
