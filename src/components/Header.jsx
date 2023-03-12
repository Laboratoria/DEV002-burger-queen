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
					<h1 className='text-2xl text-main'> La ñana restaurant</h1>
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
