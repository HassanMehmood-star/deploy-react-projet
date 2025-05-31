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
  Slide,
  Collapse,
  Slider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [isBottomVisible, setIsBottomVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);
  const [mobileCategorySubMenuOpen, setMobileCategorySubMenuOpen] = useState(null);
  const [selectedProductCategory, setSelectedProductCategory] = useState(null);
  const [sliderValue, setSliderValue] = useState(0); // State for slider value
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleMenuToggle = (event, menuName) => {
    if (openMenu === menuName) {
      setAnchorEl(null);
      setOpenMenu(null);
      setSelectedProductCategory(null);
    } else {
      setAnchorEl(event.currentTarget);
      setOpenMenu(menuName);
      if (menuName === 'Products') setSelectedProductCategory('Featured');
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
    setSelectedProductCategory(null);
  };

  const handleMobileSubMenuToggle = (menuName) => {
    setMobileSubMenuOpen((prev) => (prev === menuName ? null : menuName));
    setMobileCategorySubMenuOpen(null);
  };

  const handleMobileCategorySubMenuToggle = (category) => {
    setMobileCategorySubMenuOpen((prev) => (prev === category ? null : category));
  };

  const handleProductCategorySelect = (category) => {
    setSelectedProductCategory(category);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    // Automatically select the category based on slider value
    const categories = Object.keys(topNavItems[2].dropdownItems);
    const index = Math.floor((newValue / 100) * categories.length);
    setSelectedProductCategory(categories[index] || 'Featured');
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
    {
      label: 'AI',
      hasDropdown: true,
      dropdownItems: [
        'Overview',
        'watsonx',
        'Agents',
        'Granite models',
        'Consulting',
        'Research',
        'Ethics and governance',
      ],
    },
    {
      label: 'Hybrid Cloud',
      hasDropdown: true,
      dropdownItems: [
        'Cloud Overview',
        'Integration',
        'Security',
      ],
    },
    {
      label: 'Products',
      hasDropdown: true,
      dropdownItems: {
        Featured: [
          'Concert',
          'Environmental Intelligence',
          'Envizi',
          'FlashSystem',
          'Maximo',
          'TRIRIGA',
        ],
        'AI & machine learning': [
          'IBM Z',
          'IBM webMethods Hybrid Integration',
          'Instana',
          'MaaS360',
          'Watson Studio',
          'SPSS Modeler',
        ],
        'Robotic Process Automation (RPA)': [
          'Software to automate workflows and business processes',
          'Storage Defender',
          'Turbonomic',
          'Automation Anywhere',
          'Blue Prism',
        ],
        'Data & Analytics': [
          'Db2',
          'Cognos Analytics',
          'DataStage',
          'Planning Analytics',
        ],
        'Security': [
          'QRadar',
          'Guardium',
          'MaaS360 Security',
          'Identity Governance',
        ],
      },
    },
    { label: 'Consulting', hasDropdown: false },
    {
      label: 'Support',
      hasDropdown: true,
      dropdownItems: [
        'What’s New',
        'Documentation',
        'Support',
        'Technology Lifecycle',
        'Community',
        'Developer',
        'Training',
      ],
    },
    { label: 'Think', hasDropdown: false },
  ];

  const bottomNavItems = [
    { label: 'Consulting', hasDropdown: false },
    { label: 'Capabilities', hasDropdown: true, dropdownItems: [] },
    { label: 'Industries', hasDropdown: true, dropdownItems: [] },
    { label: 'Strategic Partners', hasDropdown: true, dropdownItems: [] },
    { label: 'Insights', hasDropdown: true, dropdownItems: [] },
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
          <div key={item.label}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleMobileSubMenuToggle(item.label)}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ sx: { color: '#000', fontSize: '1rem' } }}
                />
                {item.hasDropdown && (
                  mobileSubMenuOpen === item.label ? <ArrowDropUpIcon sx={{ color: '#000' }} /> : <ArrowDropDownIcon sx={{ color: '#000' }} />
                )}
              </ListItemButton>
            </ListItem>
            {item.hasDropdown && (
              <Collapse in={mobileSubMenuOpen === item.label} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {Array.isArray(item.dropdownItems)
                    ? item.dropdownItems.map((subItem) => (
                        <ListItem key={subItem} disablePadding>
                          <ListItemButton sx={{ pl: 4 }} onClick={handleDrawerToggle}>
                            <ListItemText
                              primary={subItem}
                              primaryTypographyProps={{ sx: { color: '#000', fontSize: '1rem' } }}
                            />
                            <ArrowRightIcon sx={{ color: '#000' }} />
                          </ListItemButton>
                        </ListItem>
                      ))
                    : Object.keys(item.dropdownItems).map((category) => (
                        <div key={category}>
                          <ListItem disablePadding>
                            <ListItemButton
                              sx={{ pl: 4 }}
                              onClick={() => handleMobileCategorySubMenuToggle(category)}
                            >
                              <ListItemText
                                primary={category}
                                primaryTypographyProps={{ sx: { color: '#000', fontSize: '1rem' } }}
                              />
                              {mobileCategorySubMenuOpen === category ? (
                                <ArrowDropUpIcon sx={{ color: '#000' }} />
                              ) : (
                                <ArrowDropDownIcon sx={{ color: '#000' }} />
                              )}
                            </ListItemButton>
                          </ListItem>
                          <Collapse in={mobileCategorySubMenuOpen === category} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {item.dropdownItems[category].map((subItem) => (
                                <ListItem key={subItem} disablePadding>
                                  <ListItemButton sx={{ pl: 8 }} onClick={handleDrawerToggle}>
                                    <ListItemText
                                      primary={subItem}
                                      primaryTypographyProps={{ sx: { color: '#000', fontSize: '1rem' } }}
                                    />
                                    <ArrowRightIcon sx={{ color: '#000' }} />
                                  </ListItemButton>
                                </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        </div>
                      ))}
                </List>
              </Collapse>
            )}
          </div>
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
          zIndex: 1100,
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
                  <div key={item.label}>
                    <Button
                      color="inherit"
                      endIcon={
                        item.hasDropdown
                          ? openMenu === item.label
                            ? <ArrowDropUpIcon />
                            : <ArrowDropDownIcon />
                          : null
                      }
                      sx={{
                        textTransform: 'none',
                        border: item.label === 'AI' ? '1px solid #d1d5db' : 'none',
                        borderRadius: '4px',
                        padding: '4px 12px',
                        color: '#000',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                      onClick={
                        item.hasDropdown
                          ? (event) => handleMenuToggle(event, item.label)
                          : undefined
                      }
                    >
                      {item.label}
                    </Button>
                    {item.hasDropdown && openMenu === item.label && (
                      <Slide direction="down" in={openMenu === item.label} mountOnEnter unmountOnExit>
                        <AppBar
                          position="fixed"
                          color="transparent"
                          elevation={0}
                          sx={{
                            top: '64px',
                            width: '100%',
                            bgcolor: '#fff',
                            borderBottom: '1px solid #e5e7eb',
                            zIndex: 1000,
                            display: isTopVisible ? 'block' : 'none',
                          }}
                        >
                          <Toolbar
                            sx={{
                              padding: '8px 0',
                              minHeight: '300px !important',
                            }}
                          >
                            {item.label === 'Products' ? (
                              <Box sx={{ display: 'flex', width: '100%', height: '100%', bgcolor: '#ffffff' }}>
                                <Box sx={{ width: '30%', padding: '8px', borderRight: '1px solid #e5e7eb' }}>
                                  <Slider
                                    value={sliderValue}
                                    onChange={handleSliderChange}
                                    min={0}
                                    max={100}
                                    step={1}
                                    sx={{
                                      margin: '16px 8px',
                                      '& .MuiSlider-thumb': {
                                        backgroundColor: '#1976d2',
                                      },
                                      '& .MuiSlider-track': {
                                        backgroundColor: '#1976d2',
                                      },
                                      '& .MuiSlider-rail': {
                                        backgroundColor: '#e5e7eb',
                                      },
                                    }}
                                  />
                                  <List
                                    sx={{
                                      width: '100%',
                                      maxHeight: '250px',
                                      overflowY: 'hidden',
                                      padding: '0 8px',
                                    }}
                                  >
                                    {Object.keys(item.dropdownItems).map((category) => (
                                      <ListItem key={category} disablePadding>
                                        <ListItemButton
                                          selected={selectedProductCategory === category}
                                          onClick={() => handleProductCategorySelect(category)}
                                          sx={{
                                            '&.Mui-selected': { backgroundColor: '#e3f2fd' },
                                            '&:hover': { backgroundColor: '#f0f0f0' },
                                          }}
                                        >
                                          <ListItemText
                                            primary={category}
                                            primaryTypographyProps={{ sx: { color: '#000', fontSize: '1rem' } }}
                                          />
                                        </ListItemButton>
                                      </ListItem>
                                    ))}
                                  </List>
                                </Box>
                                <Box sx={{ width: '70%', padding: '8px', bgcolor: '#f5f5f5' }}>
                                  {selectedProductCategory ? (
                                    <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                      {item.dropdownItems[selectedProductCategory].map((subItem) => (
                                        <Button
                                          key={subItem}
                                          variant="text"
                                          endIcon={<ArrowRightIcon sx={{ color: '#000' }} />}
                                          sx={{
                                            textTransform: 'none',
                                            color: '#000',
                                            fontSize: '1rem',
                                            '&:hover': { textDecoration: 'underline', backgroundColor: 'transparent' },
                                          }}
                                          onClick={handleMenuClose}
                                        >
                                          {subItem}
                                        </Button>
                                      ))}
                                    </Box>
                                  ) : (
                                    <Typography sx={{ color: '#000', fontSize: '1rem' }}>
                                      Select a category from the left to view options
                                    </Typography>
                                  )}
                                </Box>
                              </Box>
                            ) : item.label === 'Support' ? (
                              <Box sx={{ display: 'flex', width: '100%', height: '100%', bgcolor: '#ffffff' }}>
                                <Box sx={{ width: '33%', padding: '8px', borderRight: '1px solid #e5e7eb' }}>
                                  <Typography sx={{ fontWeight: 'bold', mb: 1, color: '#000000' }}>What’s New</Typography>
                                </Box>
                                <Box sx={{ width: '33%', padding: '8px', borderRight: '1px solid #e5e7eb' }}>
                                  <Typography sx={{ fontWeight: 'bold', mb: 1, color: '#000000' }}>Documentation</Typography>
                                  <Typography sx={{ color: '#000000' }}>All product documentation</Typography>
                                  <Typography sx={{ color: '#000000' }}>IBM Cloud documentation</Typography>
                                  <Typography sx={{ color: '#000000' }}>IBM Redbooks</Typography>
                                </Box>
                                <Box sx={{ width: '33%', padding: '8px' }}>
                                  <Typography sx={{ fontWeight: 'bold', mb: 1, color: '#000000' }}>Support</Typography>
                                  <Typography sx={{ color: '#000000' }}>Download fixes, updates & drivers</Typography>
                                  <Typography sx={{ color: '#000000' }}>Download licensed software - Passport Advantage</Typography>
                                  <Typography sx={{ color: '#000000' }}>IBM Software Licensing</Typography>
                                  <Typography sx={{ color: '#000000' }}>Open a case</Typography>
                                  <Typography sx={{ color: '#000000' }}>View more</Typography>
                                  <Typography sx={{ color: '#000000' }}>View support plans</Typography>
                                  <Typography sx={{ color: '#000000' }}>View your cases</Typography>
                                </Box>
                              </Box>
                            ) : (
                              <Toolbar
                                sx={{
                                  justifyContent: 'space-around',
                                  padding: '8px 0',
                                  minHeight: '80px !important',
                                }}
                              >
                                {item.dropdownItems.map((dropdownItem) => (
                                  <Button
                                    key={dropdownItem}
                                    color="inherit"
                                    endIcon={<ArrowRightIcon sx={{ color: '#000' }} />}
                                    sx={{
                                      textTransform: 'none',
                                      color: '#000',
                                      fontSize: '1rem',
                                      '&:hover': { textDecoration: 'underline' },
                                    }}
                                    onClick={handleMenuClose}
                                  >
                                    {dropdownItem}
                                  </Button>
                                ))}
                              </Toolbar>
                            )}
                          </Toolbar>
                        </AppBar>
                      </Slide>
                    )}
                  </div>
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
                <div key={item.label}>
                  <Button
                    color={item.label === 'Consulting' ? 'primary' : 'inherit'}
                    endIcon={
                      item.hasDropdown
                        ? openMenu === item.label
                          ? <ArrowDropUpIcon />
                          : <ArrowDropDownIcon />
                        : null
                    }
                    sx={{
                      textTransform: 'none',
                      color: item.label === 'Consulting' ? '#1976d2' : '#000',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                    onClick={
                      item.hasDropdown
                        ? (event) => handleMenuToggle(event, item.label)
                        : undefined
                    }
                  >
                    {item.label}
                  </Button>
                  {item.hasDropdown && openMenu === item.label && (
                    <Slide direction="down" in={openMenu === item.label} mountOnEnter unmountOnExit>
                      <AppBar
                        position="fixed"
                        color="transparent"
                        elevation={0}
                        sx={{
                          top: '128px',
                          width: '100%',
                          bgcolor: '#fff',
                          borderBottom: '1px solid #e5e7eb',
                          zIndex: 1000,
                          display: isTopVisible ? 'block' : 'none',
                        }}
                      >
                        <Toolbar
                          sx={{
                            justifyContent: 'space-around',
                            padding: '8px 0',
                            minHeight: '80px !important',
                          }}
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Button
                              key={dropdownItem}
                              color="inherit"
                              endIcon={<ArrowRightIcon sx={{ color: '#000' }} />}
                              sx={{
                                textTransform: 'none',
                                color: '#000',
                                fontSize: '1rem',
                                '&:hover': { textDecoration: 'underline' },
                              }}
                              onClick={handleMenuClose}
                            >
                              {dropdownItem}
                            </Button>
                          ))}
                        </Toolbar>
                      </AppBar>
                    </Slide>
                  )}
                </div>
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