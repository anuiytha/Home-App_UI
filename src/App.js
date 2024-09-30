// Filename - App.js

import "./App.css";
//import Sidebar from "./components/Sidebar";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Login from './components/login pages/Chef_loginPage.js';
// import Adminlogin from "./components/login pages/adminLogin.js";
import AdminPage from "./adminPage.js";
import PrivateRoute from "./route-guard";
import AddDish from "./components/addDish";
import Cart from './components/cart.js';
import Sidebar from "./components/Sidebar.js";
import Checkout from "./checkout.js";
import ImageUpload from "./FileUploadApp.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewChef from "./newChef.js"

import LoginType from "./components/loginType.js";


function App() {

  const [token, setToken] = useState(null);

  const handleTokenReceived = (token) => {
    setToken(token);
  };

  const tok = localStorage.getItem("token")
  console.log(tok, 'tok')

  return (
    <>

      <Router>
        {/* {(token!=null || tok) && <Logout onLogout={handelLogout}/>} */}

        <Routes>
          <Route path="/chef" element={!token ? (
            <Login onTokenReceived={handleTokenReceived} />
          ) : (
            console.log("Done")
          )} />
        </Routes>


        {/* <Routes>
          <Route path="/adminlogin" element={!token ? (
            <Adminlogin onTokenReceived={handleTokenReceived} />
          ) : (
            console.log("Done")
          )} />
        </Routes> */}


        <Routes>
          <Route path="/home" element={<PrivateRoute element={<Home token={token} />} />} />
          <Route path="/" element={<PrivateRoute element={<LoginType token={token} />} />} />
          <Route path="/adminpage" element={<PrivateRoute element={<AdminPage token={token} />} />} />
          <Route path="/newchef" element={<PrivateRoute element={<NewChef token={token} />} />} />

          <Route path="/image" element={<PrivateRoute element={<ImageUpload token={token} />} />} />

          <Route path="/login" element={<PrivateRoute element={<Login token={token} />} />} />
          <Route path="/addDish" element={<PrivateRoute element={<AddDish token={token} />} />} />
          <Route path="/cart" element={<PrivateRoute element={<Cart token={token} />} />} />
          <Route path="/checkout" element={<PrivateRoute element={<Checkout token={token} />} />} />

          {/* <Route path="/home" element={<Home token= {token}/>} onEnter = {requiredAuth}/> */}
          {/* <Route path="/report"  element={<Report  token= {token} />} />
				<Route path="/drafts" element={<Drafts token= {token} />} />
				<Route path="/rejected" element={<RejectedApprovals token= {token}  />} />
				<Route path="/worklist" element={<PendingApprovals token= {token} />} /> */}

        </Routes>
      </Router>
    </>
  );


}


export default App;


