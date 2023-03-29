// import { MenuBttnCategory } from '../components/Menu/MenuBttnCategory';
import { GiCook } from 'react-icons/gi';
// import data from '../data.json/';

const Header = ({ userEmail }) => {
	return (
		<div className=' lg:pl-28 flex flex-row h-35 w-full items-center justify-between'>
			<img
				src='src/assets/Logo-3-ñaña.png'
				className='flex justify-start items-center w-48 opacity-90 mt-8 ml-14'
				alt='LogoÑaña'
			/>
			<div className='flex items-center justify-end mt-10 mr-20'>
				<span className='flex text-2xl text-main/80'>{userEmail}</span>
				<span className='flex text-4xl text-main/80'>
					<GiCook />
				</span>
			</div>
		</div>
	);
};

export { Header };
