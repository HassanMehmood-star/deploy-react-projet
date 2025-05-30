import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [isBottomVisible, setIsBottomVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = currentScrollPos > prevScrollPos;

      // Top navbar visibility: hide when scrolling down, show when scrolling up or at the top
      setIsTopVisible(!scrollingDown || currentScrollPos < 10);

      // Bottom navbar visibility: hide when scrolling down, show when scrolling up or at the top
      setIsBottomVisible(!scrollingDown || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        color="transparent"
        elevation={1}
        sx={{ borderBottom: '1px solid #e5e7eb', transition: 'top 0.3s', top: isTopVisible ? 0 : '-64px' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', padding: '4px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
              IBM
            </Typography>
            <Button color="inherit" endIcon={<MenuIcon />} sx={{ textTransform: 'none', border: '1px solid #d1d5db', borderRadius: '4px', padding: '4px 12px' }}>
              AI
            </Button>
            <Button color="inherit" endIcon={<MenuIcon />} sx={{ textTransform: 'none', padding: '4px 12px' }}>
              Hybrid Cloud
            </Button>
            <Button color="inherit" endIcon={<MenuIcon />} sx={{ textTransform: 'none', padding: '4px 12px' }}>
              Products
            </Button>
            <Button color="inherit" sx={{ textTransform: 'none', padding: '4px 12px' }}>
              Consulting
            </Button>
            <Button color="inherit" endIcon={<MenuIcon />} sx={{ textTransform: 'none', padding: '4px 12px' }}>
              Support
            </Button>
            <Button color="inherit" sx={{ textTransform: 'none', padding: '4px 12px' }}>
              Think
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <IconButton color="default" size="small">
              <SearchIcon />
            </IconButton>
            <IconButton color="default" size="small">
              <ChatIcon />
            </IconButton>
            <IconButton color="default" size="small">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Bottom Navbar */}
      <AppBar
        position="fixed"
        color="transparent"
        elevation={1}
        sx={{
          top: isBottomVisible ? '64px' : '0px',
          transition: 'top 0.3s',
          zIndex: 1000
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', padding: '4px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Button color="primary" sx={{ textTransform: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Consulting
            </Button>
            <Button color="inherit" endIcon={<MenuIcon />} sx={{ textTransform: 'none' }}>
              Capabilities
            </Button>
            <Button color="inherit" endIcon={<MenuIcon />} sx={{ textTransform: 'none' }}>
              Industries
            </Button>
            <Button color="inherit" endIcon={<MenuIcon />} sx={{ textTransform: 'none' }}>
              Strategic Partners
            </Button>
            <Button color="inherit" endIcon={<MenuIcon />} sx={{ textTransform: 'none' }}>
              Insights
            </Button>
            <Button color="inherit" sx={{ textTransform: 'none' }}>
              Careers
            </Button>
          </div>
          <Button variant="contained" color="primary" sx={{ textTransform: 'none', padding: '6px 16px', borderRadius: '4px' }}>
            Contact IBM Consulting
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;