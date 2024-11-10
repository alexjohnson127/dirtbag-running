import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Training Plans', path: '/training' },
    { text: 'Posts', path: '/posts' },
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* Menu icon for small screens */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Clickable Title */}
          <Typography
            variant="h6"
            component={Link} // Use Link as the component
            to="/"           // Route to home page
            sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }} // Style to look like plain text
          >
            Dirtbag Running
          </Typography>

          {/* Menu buttons for large screens */}
          <div sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link} // Use Link as the component for Button
                to={item.path}   // Set route path
              >
                {item.text}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={toggleDrawer(false)}
              component={Link}
              to={item.path}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;



//import React from 'react';
//import AppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
//import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
//import { useState } from 'react';
//import { Link } from "react-router-dom"
//
//const Navbar = () => {
//  const [drawerOpen, setDrawerOpen] = useState(false);
//
//  const toggleDrawer = (open) => () => {
//    setDrawerOpen(open);
//  };
//
//  const menuItems = ['Training Plans', 'Posts', 'About', 'Services', 'Contact'];
//
//  return (
//    <div>
//      <AppBar position="static">
//        <Toolbar>
//          <IconButton
//            edge="start"
//            color="inherit"
//            aria-label="menu"
//            onClick={toggleDrawer(true)}
//            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
//          >
//            <MenuIcon />
//          </IconButton>
//          
//            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                
//                DirtBag Running
//                
//            </Typography>
//          
//          <div sx={{ display: { xs: 'none', sm: 'block' } }}>
//            {menuItems.map((item) => (
//              <Button key={item} color="inherit">
//                {item}
//              </Button>
//            ))}
//          </div>
//        </Toolbar>
//      </AppBar>
//      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//        <List>
//          {menuItems.map((item) => (
//            <ListItem button key={item} onClick={toggleDrawer(false)}>
//              <ListItemText primary={item} />
//            </ListItem>
//          ))}
//        </List>
//      </Drawer>
//    </div>
//  );
//};
//
//export default Navbar;
//