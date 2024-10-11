import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Deals from './components/Deals/Deals';
import Contacts from './components/Contacts';
import Accounts from './components/Accounts';

const App: React.FC = () => {
  return (
    <Router>
    <div>
      <Header />
      <div className='content-box clearfix'>
        <Navbar />
        <div className='right-menu'>
          {/* <Home />
          <Deals />
          <Contacts/> */}
           <Routes>
           <Route path="/" element={<Home />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/accounts" element={<Accounts />} />
          </Routes>
        </div>
      </div>




      {/* <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/accounts" element={<Accounts />} />
            </Routes>
        </Router> */}
    </div>
    </Router>
  );
}

export default App;
