import { MenuBttnCategory } from '../components/Menu/MenuBttnCategory';
import data from '../data.json/';

const Header = ({ selectCategory }) => {
	const categorys = Object.keys(data);

	return (
		<div>
			{/* {<header />} */}
			<header>
				{/* {<tittle and date />} */}
				<nav className='flex justify-start items-center mt-20 ml-10 mb-0'>
					{/* {<tabs />} */}
					<MenuBttnCategory categorys={categorys} selectCategory={selectCategory} />
				</nav>
			</header>
		</div>
	);
};

export { Header };
