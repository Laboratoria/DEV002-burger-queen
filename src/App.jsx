import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Inicio from './pages/Inicio';
import Login from './pages/Login';

function App() {
	return ( 
  <Routes>
  <Route path = "/" element = {<Inicio/>} />
  <Route path = "/login" element = {<Login/>} />
  <Route path = "/home" element = {<Home/>} />
  </Routes>)
}

export default App;
