import { useAuth } from '../context/AuthContext';
export function Home() {
	const {  user  } = useAuth();
	console.log(user);
	return <div>Home</div>;
}
