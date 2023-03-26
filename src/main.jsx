import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import Attention from "./pages/attention/Attention";
import Orders from "./pages/orders/Orders";
import Chef from "./pages/chef/Chef";
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/attention" element={<Attention />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/chef" element={<Chef />} />
      </Routes> */}
       <App/>
    </BrowserRouter>
   
  </React.StrictMode>
);
