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
import UserManagement from './components/UserManagement';
import AuthService from "./Authentication/AuthService";
import JSONUser from './Interfaces/JSONUser';

function App() {
  const [APIUser, setAPIUser] = useState<JSONUser | null>(AuthService.getCurrentUser());
 
  return (
    <div className="MainContainer">
      <Sidenav user={APIUser}/>
      <div className='MainContainerValue'>
        <Routes>
            <Route path="/" element={APIUser ? <Home /> : <Navigate replace to={"/login"} />} />
            <Route path="/licencepage" element={ APIUser ? <LicencePage /> : <Navigate replace to={"/login"} />} />
            <Route path="/usermanagement" element={ APIUser && APIUser.IsAdmin ? <UserManagement /> : <Navigate replace to={"/login"} />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
