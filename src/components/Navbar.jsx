import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [isBottomVisible, setIsBottomVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = currentScrollPos > prevScrollPos;

      setIsTopVisible(!scrollingDown || currentScrollPos < 10);
      setIsBottomVisible(!scrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const topNavItems = [
    { label: 'AI', hasDropdown: true },
    { label: 'Hybrid Cloud', hasDropdown: true },
    { label: 'Products', hasDropdown: true },
    { label: 'Consulting', hasDropdown: false },
    { label: 'Support', hasDropdown: true },
    { label: 'Think', hasDropdown: false },
  ];

  const bottomNavItems = [
    { label: 'Consulting', hasDropdown: false },
    { label: 'Capabilities', hasDropdown: true },
    { label: 'Industries', hasDropdown: true },
    { label: 'Strategic Partners', hasDropdown: true },
    { label: 'Insights', hasDropdown: true },
    { label: 'Careers', hasDropdown: false },
  ];

  const drawerContent = (
    <Box sx={{ width: 250, bgcolor: '#fff', height: '100%', padding: '16px' }}>
      <List>
        <ListItem disablePadding>
          <Typography
            variant="h6"
            sx={{ color: '#000', fontWeight: 'bold', width: '100%', padding: '8px 16px' }}
          >
            IBM
          </Typography>
        </ListItem>
        {topNavItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ sx: { color: '#000', fontSize: '1rem' } }}
              />
              {item.hasDropdown && <ArrowDropDownIcon sx={{ color: '#000' }} />}
            </ListItemButton>
          </ListItem>
        ))}
        {bottomNavItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ sx: { color: '#000', fontSize: '1rem' } }}
              />
              {item.hasDropdown && <ArrowDropDownIcon sx={{ color: '#000' }} />}
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={handleDrawerToggle}>
            <ListItemText
              primary="Contact IBM Consulting"
              primaryTypographyProps={{ sx: { color: '#1976d2', fontSize: '1rem' } }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        color="transparent"
        elevation={1}
        sx={{
          borderBottom: '1px solid #e5e7eb',
          transition: 'top 0.3s',
          top: isTopVisible ? 0 : '-64px',
          bgcolor: '#fff',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: '8px', md: '8px 16px' } }}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: '#000' }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                sx={{ color: '#000', fontWeight: 'bold', flexGrow: 1 }}
              >
                IBM
              </Typography>
              <Box sx={{ display: 'flex', gap: '8px' }}>
                <IconButton color="inherit" size="small" sx={{ color: '#000' }}>
                  <SearchIcon />
                </IconButton>
                <IconButton color="inherit" size="small" sx={{ color: '#000' }}>
                  <ChatIcon />
                </IconButton>
                <IconButton color="inherit" size="small" sx={{ color: '#000' }}>
                  <AccountCircleIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', md: '16px' } }}>
                <Typography variant="h6" sx={{ color: '#000', fontWeight: 'bold' }}>
                  IBM
                </Typography>
                {topNavItems.map((item) => (
                  <Button
                    key={item.label}
                    color="inherit"
                    endIcon={item.hasDropdown ? <ArrowDropDownIcon /> : null}
                    sx={{
                      textTransform: 'none',
                      border: item.label === 'AI' ? '1px solid #d1d5db' : 'none',
                      borderRadius: '4px',
                      padding: '4px 12px',
                      color: '#000',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <IconButton color="inherit" size="small" sx={{ color: '#000' }}>
                  <SearchIcon />
                </IconButton>
                <IconButton color="inherit" size="small" sx={{ color: '#000' }}>
                  <ChatIcon />
                </IconButton>
                <IconButton color="inherit" size="small" sx={{ color: '#000' }}>
                  <AccountCircleIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Bottom Navbar */}
      {!isMobile && (
        <AppBar
          position="fixed"
          color="transparent"
          elevation={1}
          sx={{
            top: isBottomVisible ? '64px' : '0px',
            transition: 'top 0.3s',
            zIndex: 1000,
            bgcolor: '#fff',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: '8px', md: '8px 16px' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', md: '16px' } }}>
              {bottomNavItems.map((item) => (
                <Button
                  key={item.label}
                  color={item.label === 'Consulting' ? 'primary' : 'inherit'}
                  endIcon={item.hasDropdown ? <ArrowDropDownIcon /> : null}
                  sx={{
                    textTransform: 'none',
                    color: item.label === 'Consulting' ? '#1976d2' : '#000',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: 'none',
                padding: '6px 16px',
                borderRadius: '4px',
              }}
            >
              Contact IBM Consulting
            </Button>
          </Toolbar>
        </AppBar>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 250 }, display: { xs: 'block', sm: 'none' } }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default Navbar;