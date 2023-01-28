import React from 'react';
import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import Sidenav from "./components/Sidenav";
import LicencePage from './components/LicencePage';
import Home from './components/Home';

function App() {
  return (
    <div className="MainContainer">
      <Sidenav/>
      <div className='MainContainerValue'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/licencepage" element={<LicencePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
