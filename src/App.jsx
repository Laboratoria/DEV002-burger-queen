import "./App.css";
import Chef from "./pages/chef/Chef";
import Attention from "./pages/attention/Attention";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";
import Home from "./pages/home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  auth,
  usersCollection,
  getDocs,
} from "./firebase/firebase";

function App() {
  //const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [userUid, setUserUid] = useState([]);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
      //console.log(userFirebase);
    } else {
      setUser(null);
      //console.log("null");
    }
  });

  const getUsers = async () => {
    const data = await getDocs(usersCollection);
    //console.log(data.docs);
    setUserUid(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    //console.log(userUid)
  };

  //console.log(user.email)
  const userEmail = userUid.map((doc) => doc.correo);
  const userName = userUid.map((doc) => doc.nombre);
  //console.log(userEmail);
  const userConect =
    user !== null && userEmail.filter((element) => element === user.email)
      ? user.email
      : null;
  // console.log(userConect);

  // const userMesero =
  //   userConect === "ana@gmail.com" || userConect === "angel@gmail.com";

  useEffect(() => {
    getUsers();
    console.log(user)
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/attention" element={<Attention user={userConect} />} />
        <Route path="/orders" element={<Orders user={userConect} />} />
        <Route path="/chef" element={<Chef user={userConect} />} />
        <Route path="/home" element={<Home user={userConect} />} />
      </Routes>
    </>
  );
}

export default App;
