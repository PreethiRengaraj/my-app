// import React from "react";
import './style.css';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../images/remo-logo.svg"

// const Header = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };
const Header: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      // Your logic here
      console.log('Navigation menu opened', event);
    };
  
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      // Your logic here
      console.log('User menu opened', event);
    };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Example array of menu items (you can replace this with your actual data)
  const menuItems = [{ id: 1, name: 'Profile' }, { id: 2, name: 'Logout' }];

  return (
    <div className='header'>
    <AppBar position="static">
        <a className='Logo-img'><img src={Logo} /></a>
      <Toolbar 
      style={{
        display:"unset",
        minHeight:"auto",
        padding:"0px"
      }}
      >
        {/* <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu}>
          <MenuIcon />
        </IconButton> */}
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography> */}
       
        <IconButton color="inherit" style={{padding:"0px"}} onClick={handleOpenUserMenu}>
          <AccountCircle id='user-profile'/>
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {Array.isArray(menuItems) && menuItems.map(item => (
            <MenuItem key={item.id} onClick={handleCloseNavMenu}>
              {item.name}
            </MenuItem>
          ))}
        </Menu>
        <Menu
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Header;
