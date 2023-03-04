import { ProductButton } from '../components/ProductButton';
import { ProductsContainer } from '../components/ProductsContainer';
import { Option } from '../components/Option';
import { OptionsContainer } from '../components/OptionsContainer';
import products from '/src/products.json';
const Menu = () => {
	return (
		<div>
			<OptionsContainer>
				{products.options.map((title) => (
					<Option key={title.id} name={title.name} />
				))}
			</OptionsContainer>

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

export { Menu };
