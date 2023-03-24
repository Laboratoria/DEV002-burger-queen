import { Link } from 'react-router-dom';
import { logOut } from '/src/firebase/auth.js';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
// import { BsCheckCircle, BsDashCircle, BsStopwatch } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';

const NavBarCheff = (props) => {
	const { showMenu } = props;
	const toNavigate = useNavigate();

	const handleLogOut = async () => {
		try {
			await logOut();
			toNavigate('/');
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<div
			className={`bg-main fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
				showMenu ? 'left-0' : '-left-full'
			}`}>
			<div>
				<ul className='pl-4'>
					<li className='hover:bg-secoundary-two active:bg-secoundary-two focus-ring p-4 mt-16 rounded-tl-xl rounded-bl-xl group transition-colors'>
						<Link
							to='/menus'
							className=' p-4 flex justify-center rounded-xl text-secoundary-two group-hover:text-secoundary transition-colors'>
							<GoHome className='text-3xl' />
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul className='pl-4'>
					<li className='hover:bg-secoundary-two p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
						<button
							type='button'
							onClick={handleLogOut}
							className='p-4 flex justify-center rounded-xl text-secoundary-two group-hover:text-secoundary transition-colors'>
							<RiLogoutCircleLine className='text-3xl' />
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export { NavBarCheff };
