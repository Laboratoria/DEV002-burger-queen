import { ProductButton } from './ProductButton';
import { ProductsContainer } from './ProductsContainer';
import products from '/src/products.json';

const MenuFondazos = () => {
	return (
		<div>
			<ProductsContainer>
				{products.fondazos.map((product) => (
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

export { MenuFondazos };
