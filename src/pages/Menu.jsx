import { useState } from 'react';
import { MenuPicotería } from '../components/MenuPicotería';
import { MenuFondazos } from '../components/MenuFondazos';
import { MenuRefrescos } from '../components/MenuRefrescos';
import { Header } from '../components/Header';

const Menu = () => {
	const [toShowMenuPicotería, settoShowMenuPicotería] = useState(false);
	const [toShowMenuFondazos, settoShowMenuFondazos] = useState(false);
	const [toShowMenuRefrescos, settoShowMenuRefrescos] = useState(false);

	const toShowMenu = (menu) => {
		if (menu === 'Picotería') {
			settoShowMenuPicotería(true);
			settoShowMenuFondazos(false);
			settoShowMenuRefrescos(false);
		} else if (menu === 'Fondazos') {
			settoShowMenuPicotería(false);
			settoShowMenuFondazos(true);
			settoShowMenuRefrescos(false);
		} else if (menu === 'Refrescos') {
			settoShowMenuPicotería(false);
			settoShowMenuFondazos(false);
			settoShowMenuRefrescos(true);
		}
	};
	return (
		<div>
			<header className='flex flex-row items-center bg-[#8F0505]'>
				<Header    />
			</header>
			<div className='flex flex-colum space-x-4 items-center justify-center font-sans '>
				<button
					onClick={() => toShowMenu('Picotería')}
					type='submit'
					className='flex items-center justify-center w-40 bg-secoundary-one hover:bg-secoundary-two -text font-bold py-2 px-4 rounded-full'
				>
					Picotería
				</button>
				<button
					onClick={() => toShowMenu('Fondazos')}
					type='submit'
					className='flex items-center justify-center w-40 bg-secoundary-one hover:bg-secoundary-two text-white font-bold py-2 px-4 rounded-full'
				>
					Fondazos
				</button>
				<button
					onClick={() => toShowMenu('Refrescos')}
					type='submit'
					className='flex items-center justify-center w-40 bg-secoundary-one hover:bg-secoundary-two text-white font-bold py-2 px-4 rounded-full'
				>
					Refrescos
				</button>
			</div>
			{toShowMenuPicotería && <MenuPicotería />}
			{toShowMenuFondazos && <MenuFondazos />}
			{toShowMenuRefrescos && <MenuRefrescos />}
		</div>
	);
};

export { Menu };
