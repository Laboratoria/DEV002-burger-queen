import { useState } from 'react';
import { MenuPicotería } from '../components/MenuPicotería';
import { MenuFondazos } from '../components/MenuFondazos';
import { MenuRefrescos } from '../components/MenuRefrescos';

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
			<div>
				<button
					onClick={() => toShowMenu('Picotería')}
					type='submit'
					className='option-container-bttn'
				>
					Picotería
				</button>
				<button
					onClick={() => toShowMenu('Fondazos')}
					type='submit'
					className='option-container-bttn'
				>
					Fondazos
				</button>
				<button
					onClick={() => toShowMenu('Refrescos')}
					type='submit'
					className='option-container-bttn'
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
