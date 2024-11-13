import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';

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
          
          {/* Clickable Title - In the future I want to add logo here*/}
          <Typography
            variant="h6"
            component={Link} // Use Link as the component
            to="/"           // Route to home page
            sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }} // Style to look like plain text
          >
            Dirtbag Running
          </Typography>

          {/* adding a box to push the menu to the right when it appears, this seems to be unnecessary but keeping comment for later ref */}
          {/*<Box sx={{ flexGrow:1 }} />*/}

          {/* Menu icon for small screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Menu buttons for large screens */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
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


