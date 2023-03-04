import { ProductButton } from '../components/ProductButton';
import { ProductsContainer } from '../components/ProductsContainer';
import products from '/src/products.json';
const MenuFondazos = () => {
	return (
		<ProductsContainer>
			{products.fondazos.map((product) => (
				<ProductButton key={product.id} name={product.name} price={product.price} />
			))}
		</ProductsContainer>
	);
};

export { MenuFondazos };
