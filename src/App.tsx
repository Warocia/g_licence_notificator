import React, {useState} from 'react';
import './App.css';
import { Navigate } from "react-router-dom";
import Login from './components/Login';
import {
  Routes,
  Route,
} from "react-router-dom";

import Sidenav from "./components/Sidenav";
import LicencePage from './components/LicencePage';
import Home from './components/Home';
import AuthService from "./Authentication/AuthService";

function App() {
  const [tokenAPI, setTokenAPI] = useState<string | null>(AuthService.getCurrentToken());
  

  return (
    <div className="MainContainer">
      <Sidenav/>
      <div className='MainContainerValue'>
        <Routes>
            <Route path="/" element={tokenAPI ? <Home /> : <Navigate replace to={"/login"} />} />
            <Route path="/licencepage" element={ tokenAPI ? <LicencePage /> : <Navigate replace to={"/login"} />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
