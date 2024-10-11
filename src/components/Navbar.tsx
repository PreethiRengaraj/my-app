// src/components/Navbar.tsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for routing
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Import arrow icon
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; // Import arrow icon

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div className={`Left-side-bar sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <ArrowBackIosNewIcon className="toggle-icon" /> : <ArrowForwardIosIcon className="toggle-icon" />} {/* Toggle icon */}
      </div>
      <div className="leftFixed-menu">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <HomeOutlinedIcon />
              {isOpen && <span>Home</span>} {/* Show text only when sidebar is open */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/deals" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <MonetizationOnOutlinedIcon />
              {isOpen && <span>Deals</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <AccountBoxOutlinedIcon />
              {isOpen && <span>Contacts</span>}
            </NavLink>
          </li>
          <li>
            <NavLink to="/accounts" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <AccountBalanceOutlinedIcon />
              {isOpen && <span>Accounts</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
