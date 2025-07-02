import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    useTheme,
    useMediaQuery,
    Menu,
    MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    Menu as MenuIcon,
    Brightness4 as DarkModeIcon,
    Brightness7 as LightModeIcon,
    Home as HomeIcon,
    Info as InfoIcon,
    MonetizationOn as PricingIcon,
    Article as BlogIcon,
    PhotoLibrary as GalleryIcon,
    AdminPanelSettings as AdminIcon
} from '@mui/icons-material';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useThemeMode } from '../contexts/ThemeContext';

interface RootLayoutProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    }
}));

const Logo = styled('img')(({ theme }) => ({
    height: 40,
    marginRight: theme.spacing(2),
    filter: theme.palette.mode === 'dark' ? 'brightness(0) invert(1)' : 'none'
}));

const NavButton = styled(Button)<{ active?: boolean }>(({ theme, active }) => ({
    color: theme.palette.mode === 'dark' ? 'white' : '#333',
    fontWeight: active ? 'bold' : 'normal',
    backgroundColor: active ? 'rgba(234, 7, 7, 0.1)' : 'transparent',
    border: active ? '2px solid #EA0707' : '2px solid transparent',
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1, 2),
    margin: theme.spacing(0, 0.5),
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: 'rgba(234, 7, 7, 0.1)',
        border: '2px solid #EA0707',
    }
}));

const MainContent = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 64, // Height of AppBar
}));

const MainContentShift = styled(MainContent, {
    shouldForwardProp: (prop) => prop !== 'open',
})<{ open?: boolean }>(({ theme, open }) => ({
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: open ? 240 : 0, // Width of drawer
}));

const RootLayout: React.FC<RootLayoutProps> = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const location = useLocation();
    const { darkMode: contextDarkMode, toggleDarkMode: contextToggleDarkMode } = useThemeMode();

    const [drawerOpen, setDrawerOpen] = useState(!isMobile);
    const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

    const navigationItems = [
        { text: 'Home', path: '/', icon: <HomeIcon /> },
        { text: 'About', path: '/about', icon: <InfoIcon /> },
        { text: 'Pricing', path: '/pricing', icon: <PricingIcon /> },
        { text: 'Blog', path: '/blog', icon: <BlogIcon /> },
        { text: 'Gallery', path: '/gallery', icon: <GalleryIcon /> },
        { text: 'Admin', path: '/admin', icon: <AdminIcon /> }
    ];

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleNavigation = (path: string) => {
        navigate(path);
        if (isMobile) {
            setMobileMenuAnchor(null);
        }
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMenuAnchor(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchor(null);
    };

    const isActivePath = (path: string) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
            <StyledAppBar position="fixed" elevation={0}>
                <Toolbar>
                    {/* Mobile Menu Button */}
                    {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: { md: 'none' },
                            color: theme.palette.mode === 'dark' ? 'white' : '#333'
                        }}
                    >
                        <MenuIcon />
                    </IconButton> */}

                    {/* Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
                        <Logo
                            src="/kfma/KFMA LOGO BLACK.png"
                            alt="KFMA Logo"
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                fontWeight: 'bold',
                                color: theme.palette.mode === 'dark' ? 'white' : '#333',
                                fontFamily: 'Roboto, sans-serif'
                            }}
                        >
                            KFMA
                        </Typography>
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'center'
                    }}>
                        {navigationItems.map((item) => (
                            <NavButton
                                key={item.text}
                                active={isActivePath(item.path)}
                                onClick={() => handleNavigation(item.path)}
                                startIcon={item.icon}
                            >
                                {item.text}
                            </NavButton>
                        ))}
                    </Box>

                    {/* Mobile Navigation Menu */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-end' }}>
                        <IconButton
                            onClick={handleMobileMenuOpen}
                            sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#333' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={mobileMenuAnchor}
                            open={Boolean(mobileMenuAnchor)}
                            onClose={handleMobileMenuClose}
                            PaperProps={{
                                sx: {
                                    backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : 'white',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                }
                            }}
                        >
                            {navigationItems.map((item) => (
                                <MenuItem
                                    key={item.text}
                                    onClick={() => handleNavigation(item.path)}
                                    sx={{
                                        backgroundColor: isActivePath(item.path) ? 'rgba(234, 7, 7, 0.1)' : 'transparent',
                                        color: isActivePath(item.path) ? '#EA0707' : 'inherit',
                                        fontWeight: isActivePath(item.path) ? 'bold' : 'normal'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        {item.icon}
                                        {item.text}
                                    </Box>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Dark Mode Toggle */}
                    <IconButton
                        onClick={contextToggleDarkMode}
                        sx={{
                            ml: 2,
                            color: theme.palette.mode === 'dark' ? 'white' : '#333',
                            backgroundColor: 'rgba(234, 7, 7, 0.1)',
                            '&:hover': {
                                backgroundColor: 'rgba(234, 7, 7, 0.2)',
                            }
                        }}
                    >
                        {contextDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Toolbar>
            </StyledAppBar>

            {/* Main Content */}
            <MainContentShift
                sx={{
                    backgroundColor: theme.palette.background.default,
                    minHeight: '100vh'
                }}
            >
                <Outlet />
            </MainContentShift>
        </Box>
    );
};

export default RootLayout;
