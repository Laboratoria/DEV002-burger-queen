import "./App.css";
import Chef from "./pages/chef/Chef";
import Attention from "./pages/attention/Attention";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/attention" element={<Attention />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/chef" element={<Chef />} />
      </Routes>
    </>
  );
}

export default App;
