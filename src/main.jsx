import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chef from "./pages/Chef";
import Attention from "./pages/Attention";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="attention" element={<Attention />} />
      <Route path="orders" element={<Orders />} />
      <Route path="chef" element={<Chef />} />
    </Routes>
  </BrowserRouter>
);
