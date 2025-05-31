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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);
  const [mobileCategorySubMenuOpen, setMobileCategorySubMenuOpen] = useState(null);
  const [selectedProductCategory, setSelectedProductCategory] = useState(null);
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingDown = currentScrollPos > prevScrollPos;

      setIsTopVisible(!scrollingDown || currentScrollPos < 10);
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
        'Agents',
        'Granite models',
        'Consulting',
        'Research',
        'Ethics and governance',
      ],
    },
    {
      label: 'Products',
      hasDropdown: true,
      dropdownItems: {
        Featured: [
          { name: 'Concert', description: 'Software to manage applications, mitigate risks and enhance resilience' },
          { name: 'Environmental Intelligence', description: 'SaaS for predicting and responding to weather and climate events' },
          { name: 'Envizi', description: 'ESG data management, reporting and analysis SaaS' },
          { name: 'FlashSystem', description: 'Primary storage for performance and latency sensitive workloads' },
          { name: 'Maximo', description: 'Software for asset management and related workflows' },
          { name: 'TRIRIGA', description: 'Manage cloud infrastructure and security' },
          { name: 'HashiCorp', description: 'Manage cloud infrastructure and security' },
        ],
        'AI & machine learning': [
          { name: 'IBM Z', description: 'Flagship mainframe with on-chip AI and quantum-safe cryptography' },
          { name: 'IBM webMethods Hybrid Integration', description: 'AI powered automation software to unify integration workflows' },
          { name: 'Instana', description: 'Software for application performance monitoring and automation' },
          { name: 'MaaS360', description: 'Unified endpoint management software for many device types' },
          { name: 'Watson Studio', description: 'Software for data science and machine learning' },
          { name: 'SPSS Modeler', description: 'Software for predictive analytics' },
        ],
        'Robotic Process Automation (RPA)': [
          { name: 'Software to automate workflows and business processes', description: 'Automates repetitive tasks to improve efficiency' },
          { name: 'Storage Defender', description: 'Data resiliency software for threat detection and data recovery' },
          { name: 'Turbonomic', description: 'Software to manage and optimize IT resource usage' },
          { name: 'Automation Anywhere', description: 'Platform for intelligent automation solutions' },
          { name: 'Blue Prism', description: 'Enterprise-grade robotic process automation software' },
        ],
        'Data & Analytics': [
          { name: 'Db2', description: 'Enterprise database management system' },
          { name: 'Cognos Analytics', description: 'Business intelligence and analytics platform' },
          { name: 'DataStage', description: 'Data integration and ETL tool' },
          { name: 'Planning Analytics', description: 'Integrated planning and analytics solution' },
        ],
        'Security': [
          { name: 'QRadar', description: 'Security information and event management (SIEM) solution' },
          { name: 'Guardium', description: 'Data security and protection software' },
          { name: 'MaaS360 Security', description: 'Mobile device security management' },
          { name: 'Identity Governance', description: 'Identity and access management solution' },
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
    {
      name: 'Capabilities',
      hasDropdown: true,
      dropdownItems: [
        'Application services',
        'Artificial intelligence',
        'Automation',
        'Business strategy',
        'Cloud',
        'Customer experience',
        'Cybersecurity',
        'Finance',
        'HR and talent',
        'Marketing',
      ],
    },
    {
      name: 'Industries',
      hasDropdown: true,
      dropdownItems: [
        'Energy',
        'Financial Services',
        'Government',
        'Healthcare Services',
        'Retail',
        'Telecommunications',
        'US Federal',
      ],
    },
    { name: 'Strategic Partners', hasDropdown: true, dropdownItems: [] },
    { name: 'Insights', hasDropdown: true, dropdownItems: [] },
    { name: 'Careers', hasDropdown: false },
  ];

  const drawerContent = (
    <Box sx={{ width: '80vw', maxWidth: '300px', bgcolor: '#fff', height: '100%', padding: '16px', overflowY: 'auto' }}>
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
                  mobileSubMenuOpen === item.label ? (
                    <ArrowDropUpIcon sx={{ color: '#000' }} />
                  ) : (
                    <ArrowDropDownIcon sx={{ color: '#000' }} />
                  )
                )}
              </ListItemButton>
            </ListItem>
            {item.hasDropdown && (
              <Collapse in={mobileSubMenuOpen === item.label} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {Array.isArray(item.dropdownItems) ? (
                    item.dropdownItems.map((subItem) => (
                      <ListItem key={subItem} disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={handleDrawerToggle}>
                          <ListItemText
                            primary={subItem}
                            primaryTypographyProps={{ sx: { color: '#000', fontSize: '0.9rem' } }}
                          />
                          <ArrowRightIcon sx={{ color: '#000' }} />
                        </ListItemButton>
                      </ListItem>
                    ))
                  ) : (
                    Object.keys(item.dropdownItems).map((category) => (
                      <div key={category}>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => handleMobileCategorySubMenuToggle(category)}
                          >
                            <ListItemText
                              primary={category}
                              primaryTypographyProps={{ sx: { color: '#000', fontSize: '0.9rem' } }}
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
                              <ListItem key={subItem.name} disablePadding>
                                <ListItemButton sx={{ pl: 8 }} onClick={handleDrawerToggle}>
                                  <ListItemText
                                    primary={subItem.name}
                                    primaryTypographyProps={{ sx: { color: '#000', fontSize: '0.85rem' } }}
                                  />
                                  <ArrowRightIcon sx={{ color: '#000' }} />
                                </ListItemButton>
                              </ListItem>
                            ))}
                          </List>
                        </Collapse>
                      </div>
                    ))
                  )}
                </List>
              </Collapse>
            )}
          </div>
        ))}
        {bottomNavItems.map((item) => (
          <div key={item.name}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleMobileSubMenuToggle(item.name)}>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ sx: { color: '#000', fontSize: '1rem' } }}
                />
                {item.hasDropdown && (
                  mobileSubMenuOpen === item.name ? (
                    <ArrowDropUpIcon sx={{ color: '#000' }} />
                  ) : (
                    <ArrowDropDownIcon sx={{ color: '#000' }} />
                  )
                )}
              </ListItemButton>
            </ListItem>
            {item.hasDropdown && (
              <Collapse in={mobileSubMenuOpen === item.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.dropdownItems.map((subItem) => (
                    <ListItem key={subItem} disablePadding>
                      <ListItemButton sx={{ pl: 4 }} onClick={handleDrawerToggle}>
                        <ListItemText
                          primary={subItem}
                          primaryTypographyProps={{ sx: { color: '#000', fontSize: '0.9rem' } }}
                        />
                        <ArrowRightIcon sx={{ color: '#000' }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
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
          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: '8px 12px', md: '8px 16px' } }}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: '#000', padding: '8px' }}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
              <Typography
                variant="h6"
                sx={{ color: '#000', fontWeight: 'bold', flexGrow: 1, fontSize: '1.2rem' }}
              >
                IBM
              </Typography>
              <Box sx={{ display: 'flex', gap: '8px' }}>
                <IconButton color="inherit" size="small" sx={{ color: '#000', padding: '8px' }}>
                  <SearchIcon fontSize="small" />
                </IconButton>
                <IconButton color="inherit" size="small" sx={{ color: '#000', padding: '8px' }}>
                  <ChatIcon fontSize="small" />
                </IconButton>
                <IconButton color="inherit" size="small" sx={{ color: '#000', padding: '8px' }}>
                  <AccountCircleIcon fontSize="small" />
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', md: '12px' } }}>
                <Typography variant="h6" sx={{ color: '#000', fontWeight: 'bold', fontSize: '1.25rem' }}>
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
                        border: item.label === 'AI' ? '' : 'none',
                        borderRadius: '4px',
                        padding: '6px 12px',
                        color: '#000',
                        fontSize: '0.9rem',
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
                            zIndex: 1100,
                            display: isTopVisible ? 'block' : 'none',
                          }}
                        >
                          <Toolbar
                            sx={{
                              padding: '16px',
                              minHeight: 'auto !important',
                              maxHeight: '400px',
                              overflowY: 'auto',
                            }}
                          >
                            {item.label === 'Products' ? (
                              <Box sx={{ display: 'flex', width: '100%', bgcolor: '#ffffff', flexDirection: { xs: 'column', md: 'row' } }}>
                                <Box sx={{ width: { xs: '100%', md: '30%' }, padding: '8px', borderRight: { xs: 'none', md: '1px solid #e5e7eb' } }}>
                                  <List
                                    sx={{
                                      width: '100%',
                                      maxHeight: '300px',
                                      overflowY: 'auto',
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
                                            padding: '8px 16px',
                                          }}
                                        >
                                          <ListItemText
                                            primary={category}
                                            primaryTypographyProps={{ sx: { color: '#000', fontSize: '0.9rem' } }}
                                          />
                                        </ListItemButton>
                                      </ListItem>
                                    ))}
                                  </List>
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '70%' }, padding: '8px', bgcolor: '#f5f5f5' }}>
                                  {selectedProductCategory && (
                                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: '16px', padding: '16px' }}>
                                      {item.dropdownItems[selectedProductCategory].map((item, index) => (
                                        <Box key={index} sx={{ textAlign: 'left' }}>
                                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#000', fontSize: '0.9rem' }}>
                                            {item.name}
                                          </Typography>
                                          <Typography variant="body2" sx={{ color: '#000', fontSize: '0.8rem' }}>
                                            {item.description}
                                          </Typography>
                                        </Box>
                                      ))}
                                    </Box>
                                  )}
                                </Box>
                              </Box>
                            ) : item.label === 'Support' ? (
                              <Box sx={{ display: 'flex', width: '100%', flexDirection: { xs: 'column', md: 'row' }, bgcolor: '#ffffff' }}>
                                <Box sx={{ width: { xs: '100%', md: '33%' }, padding: '8px', borderRight: { xs: 'none', md: '1px solid #e5e7eb' } }}>
                                  <Typography sx={{ fontWeight: 'bold', mb: 1, color: '#000', fontSize: '0.9rem' }}>What’s New</Typography>
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '33%' }, padding: '8px', borderRight: { xs: 'none', md: '1px solid #e5e7eb' } }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Typography sx={{ fontWeight: 'bold', color: '#000', mr: 1, fontSize: '0.9rem' }}>
                                      Documentation
                                    </Typography>
                                    <ArrowRightIcon sx={{ color: '#000' }} />
                                  </Box>
                                  <Typography sx={{ color: '#000', fontSize: '0.8rem' }}>All product documentation</Typography>
                                  <Typography sx={{ color: '#000', fontSize: '0.8rem' }}>IBM Cloud documentation</Typography>
                                  <Typography sx={{ color: '#000', fontSize: '0.8rem' }}>IBM Redbooks</Typography>
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '33%' }, padding: '8px' }}>
                                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <Typography sx={{ fontWeight: 'bold', color: '#000', mr: 1, fontSize: '0.9rem' }}>
                                      Support
                                    </Typography>
                                    <ArrowRightIcon sx={{ color: '#000' }} />
                                  </Box>
                                  <Typography sx={{ color: '#000', fontSize: '0.8rem' }}>Download fixes, updates & drivers</Typography>
                                  <Typography sx={{ color: '#000', fontSize: '0.8rem' }}>Download licensed software - Passport Advantage</Typography>
                                  <Typography sx={{ color: '#000', fontSize: '0.8rem' }}>IBM Software Licensing</Typography>
                                  <Typography sx={{ color: '#000', fontSize: '0.8rem' }}>Open a case</Typography>
                                  <Typography sx={{ color: '#000', fontSize: '0.8rem' }}>View more</Typography>
                                  <Typography sx={{ color: '#000', fontSize: '0.8rem' }}>View support plans</Typography>
                                  <Typography sx={{ color: '#000', fontSize: '0.8rem' }}>View your cases</Typography>
                                </Box>
                              </Box>
                            ) : (
                              <Box
                                sx={{
                                  display: 'grid',
                                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                                  gap: '16px',
                                  padding: '16px',
                                  width: '100%',
                                  bgcolor: '#ffffff',
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
                                      fontSize: '0.9rem',
                                      justifyContent: 'flex-start',
                                      '&:hover': { textDecoration: 'underline' },
                                    }}
                                    onClick={handleMenuClose}
                                  >
                                    {dropdownItem}
                                  </Button>
                                ))}
                              </Box>
                            )}
                          </Toolbar>
                        </AppBar>
                      </Slide>
                    )}
                  </div>
                ))}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <IconButton color="inherit" size="small" sx={{ color: '#000', padding: '8px' }}>
                  <SearchIcon fontSize="medium" />
                </IconButton>
                <IconButton color="inherit" size="small" sx={{ color: '#000', padding: '8px' }}>
                  <ChatIcon fontSize="medium" />
                </IconButton>
                <IconButton color="inherit" size="small" sx={{ color: '#000', padding: '8px' }}>
                  <AccountCircleIcon fontSize="medium" />
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
            top: isTopVisible ? '64px' : '0px',
            transition: 'top 0.3s',
            zIndex: 1100,
            bgcolor: '#fff',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', padding: { xs: '8px 12px', md: '8px 16px' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '8px', md: '12px' } }}>
              {bottomNavItems.map((item) => (
                <div key={item.name}>
                  <Button
                    color={item.name === 'Consulting' ? 'primary' : 'inherit'}
                    endIcon={
                      item.hasDropdown
                        ? openMenu === item.name
                          ? <ArrowDropUpIcon />
                          : <ArrowDropDownIcon />
                        : null
                    }
                    sx={{
                      textTransform: 'none',
                      color: item.name === 'Consulting' ? '#1976d2' : '#000',
                      fontSize: '0.9rem',
                      padding: '6px 12px',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                    onClick={
                      item.hasDropdown
                        ? (event) => handleMenuToggle(event, item.name)
                        : undefined
                    }
                  >
                    {item.name}
                  </Button>
                  {item.hasDropdown && openMenu === item.name && (
                    <Slide direction="down" in={openMenu === item.name} mountOnEnter unmountOnExit>
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
                            padding: '16px',
                            minHeight: 'auto !important',
                            maxHeight: '400px',
                            overflowY: 'auto',
                          }}
                        >
                          {item.name === 'Capabilities' ? (
                            <Box sx={{ display: 'flex', width: '100%', flexDirection: { xs: 'column', md: 'row' }, bgcolor: '#0000' }}>
                              <Box sx={{ width: { xs: '100%', md: '30%' }, padding: '8px', borderRight: { xs: 'none', md: '1px solid #e5e7eb' }, maxHeight: '300px', overflowY: 'auto' }}>
                                <List sx={{ width: '100%', padding: '0 8px' }}>
                                  {item.dropdownItems.map((dropdownItem) => (
                                    <ListItem key={dropdownItem} disablePadding>
                                      <ListItemButton
                                        sx={{ '&:hover': { backgroundColor: '#0000' }, padding: '8px 16px' }}
                                        onClick={handleMenuClose}
                                      >
                                        <ListItemText
                                          primary={dropdownItem}
                                          primaryTypographyProps={{ sx: { color: '#000', fontSize: '0.9rem' } }}
                                        />
                                      </ListItemButton>
                                    </ListItem>
                                  ))}
                                </List>
                              </Box>
                              <Box sx={{ width: { xs: '100%', md: '70%' }, padding: '16px', bgcolor: '#0000' }}>
                                <Typography sx={{ fontWeight: 'bold', mb: 2, color: '#000', fontSize: '0.9rem' }}>Signature Experiences</Typography>
                                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(1, 1fr)' }, gap: '16px' }}>
                                  <Box sx={{ textAlign: 'left' }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#000', fontSize: '0.9rem' }}>
                                      Consulting Advantage
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#000', fontSize: '0.8rem' }}>
                                      First-of-its-kind AI-powered platform to supercharge client delivery faster, at scale.
                                    </Typography>
                                  </Box>
                                  <Box sx={{ textAlign: 'left' }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#000', fontSize: '0.9rem' }}>
                                      Garage
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#000', fontSize: '0.8rem' }}>
                                      Collaborative engagement model for accelerating AI and digital transformation.
                                    </Typography>
                                  </Box>
                                  <Box sx={{ textAlign: 'left' }}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#000', fontSize: '0.9rem' }}>
                                      X-Force
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#000', fontSize: '0.8rem' }}>
                                      Build a comprehensive, integrated security program to protect your organization from global threats.
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          ) : item.name === 'Industries' ? (
                            <Box sx={{ display: 'flex', width: '100%', flexDirection: { xs: 'column', md: 'row' }, bgcolor: '#fff' }}>
                              <Box sx={{ width: { xs: '100%', md: '30%' }, padding: '8px', borderRight: { xs: 'none', md: '1px solid #e5e7eb' }, maxHeight: '300px', overflowY: 'auto' }}>
                                <List sx={{ width: '100%', padding: '0 8px' }}>
                                  {item.dropdownItems.map((dropdownItem) => (
                                    <ListItem key={dropdownItem} disablePadding>
                                      <ListItemButton
                                        sx={{ '&:hover': { backgroundColor: '#f0f0f0' }, padding: '8px 16px' }}
                                        onClick={handleMenuClose}
                                      >
                                        <ListItemText
                                          primary={dropdownItem}
                                          primaryTypographyProps={{ sx: { color: '#000', fontSize: '0.9rem' } }}
                                        />
                                      </ListItemButton>
                                    </ListItem>
                                  ))}
                                </List>
                              </Box>
                              <Box sx={{ width: { xs: '100%', md: '70%' }, padding: '16px', bgcolor: '#0000' }}>
                                <Typography sx={{ fontWeight: 'bold', mb: 2, color: '#000', fontSize: '0.9rem' }}>Industry Solutions</Typography>
                                <Typography variant="body2" sx={{ color: '#000', fontSize: '0.8rem' }}>
                                  Explore tailored solutions for your industry.
                                </Typography>
                              </Box>
                            </Box>
                          ) : (
                            <Box
                              sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                                gap: '16px',
                                padding: '16px',
                                width: '100%',
                                bgcolor: '#ffffff',
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
                                    fontSize: '0.9rem',
                                    justifyContent: 'flex-start',
                                    '&:hover': { textDecoration: 'underline' },
                                  }}
                                  onClick={handleMenuClose}
                                >
                                  {dropdownItem}
                                </Button>
                              ))}
                            </Box>
                          )}
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
                fontSize: '0.9rem',
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
        sx={{
          '& .MuiDrawer-paper': {
            width: '80vw',
            maxWidth: '300px',
            bgcolor: '#fff',
          },
          display: { xs: 'block', sm: 'none' },
        }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default Navbar;