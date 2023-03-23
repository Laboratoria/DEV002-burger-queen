// import { MenuBttnCategory } from '../components/Menu/MenuBttnCategory';
import { IoIosPerson } from 'react-icons/io';
// import data from '../data.json/';

const Header = ({ userEmail }) => {
	return (
		<div>
			{/* {<header />} */}
				<div>
					<div className='flex flex-row md:flex-row gap-32 h-30 rounded-tr-2xl'>
						<img
							src='src/assets/Logo-3-ñaña.png'
							className='mt-6 w-48'
							alt='LogoÑaña'
						/>
						<div className='flex items-center text-xl text-main-text/80 mt-8'>
							<span className='flex justify-items-end text-4xl text-main-text'>
								<IoIosPerson />
							</span>
							{userEmail}
						</div>
					</div>
				</div>
		</div>
	);
};

export { Header };
