import { MenuBttnCategory } from '../components/Menu/MenuBttnCategory';
import data from '../data.json/';

const Header = ({ selectCategory }) => {
	const categorys = Object.keys(data);

	return (
		<div>
			{/* {<header />} */}
			<header>
				{/* {<tittle and date />} */}
				<div className='flex flex-col md:flex-row md-justify-between md:items-center gap-4 mb-6'>
					<img
						src='src/assets/Logo-2-ñaña.png'
						className='w-60 rounded-lg'
						alt='LogoÑaña'
					/>

					<p> 10 marzo 2023</p>
				</div>
				<nav>
					{/* {<tabs />} */}
					<MenuBttnCategory categorys={categorys} selectCategory={selectCategory} />
				</nav>
			</header>
		</div>
	);
};

export { Header };
