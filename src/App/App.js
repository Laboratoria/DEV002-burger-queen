import React from "react";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../Home/Home.jsx";
import Menu from '../Menu/Menu.jsx';
import Order from '../Order/Order.jsx';
import Chef from '../Chef/Chef.jsx';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/chef" element={<Chef/>} />
        </Routes>
      </BrowserRouter>
    )
  }

  export default App;