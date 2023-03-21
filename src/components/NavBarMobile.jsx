import {
	RiAddLine,
	RiPieChartLine,
	RiCloseLine,
	RiMenu3Fill,
} from 'react-icons/ri';
const NavBarMobile = (toggleMenu, toggleOrders, showMenu) => {
	return (
		<div>
			<nav className='bg-main lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl'>
				<button className='p-2'>
					<RiAddLine />
				</button>
				<button onClick={()  =>  toggleOrders()} className='p-2'>
					<RiPieChartLine />
				</button>
				<button onClick={()  =>  toggleMenu()} className='text-white p-2'>
					{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
				</button>
			</nav>
		</div>
	);
};

export { NavBarMobile };
