import { Link } from 'react-router-dom';
import { logOut } from '/src/firebase/auth.js';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsClipboard2Plus } from 'react-icons/bs';

const NavBar = (props) => {
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
					<li>
						<h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'></h1>
					</li>
					<li className='hover:bg-secoundary-two p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
						<Link
							to='/orders'
							className='p-4 flex justify-center rounded-xl text-secoundary-two group-hover:text-secoundary transition-colors'>
							<AiOutlineShoppingCart className='text-3xl' />
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<ul className='pl-4'>
					<li>
						<h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'></h1>
					</li>
					<li className='hover:bg-secoundary-two p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
						<Link
							to='/menu'
							className='p-4 flex justify-center rounded-xl text-secoundary-two group-hover:text-secoundary transition-colors'>
							<BsClipboard2Plus className='text-3xl' />
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

export { NavBar };
