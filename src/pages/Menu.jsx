import { ProductButton } from '../components/ProductButton';
import { ProductsContainer } from '../components/ProductsContainer';

const Menu = () => {
	return (
		<ProductsContainer>
			{products.map((product) => (
				<ProductButton key={product.id} name={product.name} price={product.price} />
			))}
		</ProductsContainer>
	);
};

export { Menu };
