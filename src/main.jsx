import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chef from "./pages/chef/Chef";
import Attention from "./pages/attention/Attention";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="attention" element={<Attention />} />
      <Route path="orders" element={<Orders />} />
      <Route path="chef" element={<Chef />} />
    </Routes>
  </BrowserRouter>
);
