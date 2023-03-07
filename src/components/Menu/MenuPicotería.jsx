import { ProductButton } from '../Menu/ProductButton';
import { ProductsContainer } from '../Menu/ProductsContainer';
import products from '/src/products.json';

const MenuPicotería = () => {
	return (
		<div>
			<ProductsContainer>
				{products.picotería.map((product) => (
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

export { MenuPicotería };
