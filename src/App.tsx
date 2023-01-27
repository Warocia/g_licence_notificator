import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavMenu from "./components/NavMenu"
import LicencePage from './components/LicencePage';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <NavMenu></NavMenu>
        <Route path='/home' component={Home} />
        <Route path='/licencepage' component={LicencePage} />
      </Router>
    </>
  );
}

export default App;
