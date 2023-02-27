import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useLocation, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        // padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const InternalDrawer = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [pageTitle, setPageTitle] = useState("");

    const token = localStorage.getItem("type");

    // navbar desktop and mobile view start

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleUser1Profile = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setSelectedIndex('internal-user1-profile')
        navigate('/internal-user1-profile')
    }

    const handleUser2Profile = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setSelectedIndex('user-2-profile')
        navigate('/user-2-profile')
    }

    const handleUser1Account = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setSelectedIndex('internal-user1-account')
        navigate('/internal-user1-account')
    }

    const handleUser2Account = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setSelectedIndex('user-2-account')
        navigate('/user-2-account')
    }

    const ITEM_HEIGHT = 100;

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            id={menuId}
            MenuListProps={{
                'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            PaperProps={{
                elevation: 0,
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
        >
            {token == 'internal1' &&
                <MenuItem onClick={handleUser1Profile}>
                    <Typography variant="inherit" noWrap>
                        user 1 Profile
                    </Typography>
                </MenuItem>
            }

            {token == 'internal1' &&
                <MenuItem onClick={handleUser1Account}>
                    <Typography variant="inherit" noWrap>
                        user 1  account
                    </Typography>
                </MenuItem>
            }

            {token == 'internal2' &&
                <MenuItem onClick={handleUser2Profile}>
                    <Typography variant="inherit" noWrap>
                        user 2 Profile
                    </Typography>
                </MenuItem>
            }


            {token == 'internal2' &&
                <MenuItem onClick={handleUser2Account}>
                    <Typography variant="inherit" noWrap>
                        user 2  account
                    </Typography>
                </MenuItem>
            }

            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            PaperProps={{
                elevation: 0,
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >

            {token == 'internal1' &&
                <MenuItem>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <Typography variant="inherit" noWrap>
                        Messages
                    </Typography>
                </MenuItem>
            }

            {token == 'internal1' &&
                <MenuItem>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Typography variant="inherit" noWrap>
                        Notifications
                    </Typography>
                </MenuItem>
            }

            {token == 'internal1' &&
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Typography variant="inherit" noWrap>
                        Profile
                    </Typography>
                </MenuItem>
            }

            {token == 'internal2' &&
                <MenuItem>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={1} color="error">
                            <MessageIcon />
                        </Badge>
                    </IconButton>
                    <Typography variant="inherit" noWrap>
                        Messages
                    </Typography>
                </MenuItem>
            }

            {token == 'internal2' &&
                <MenuItem>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={1} color="error">
                            <NotificationImportantIcon />
                        </Badge>
                    </IconButton>
                    <Typography variant="inherit" noWrap>
                        Notifications
                    </Typography>
                </MenuItem>
            }

            {token == 'internal2' &&
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountBoxIcon />
                    </IconButton>
                    <Typography variant="inherit" noWrap>
                        Profile
                    </Typography>
                </MenuItem>
            }

            <MenuItem>
                <Button variant="contained" color="error" size='large' onClick={() => handleLogout()} >Logout</Button>
            </MenuItem>
        </Menu>
    );


    // navbar desktop and mobile view end


    const navItems1 = [
        {
            text: "User 1 Dashboard",
            icon: <MailIcon />,
            indexes: 0,
        },
        {
            text: "Products",
            icon: <InboxIcon />,
            indexes: 1,
        },
    ];

    const navItems2 = [
        {
            text: "Sales",
            icon: <InboxIcon />,
            indexes: 0,
        },
        {
            text: "Marketing",
            icon: <MailIcon />,
            indexes: 1,
        }
    ];

    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        if (token == 'internal1') {
            setItemsList(navItems1)
        } else if (token == 'internal2') {
            setItemsList(navItems2)
        }
    }, [token])

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        if (index == 0 && token == 'internal1') {
            navigate('/users-1-dashboard')
        }
        else if (index == 1 && token == 'internal1') {
            navigate('/products')
        }
        else if (index == 0 && token == 'internal2') {
            navigate('/sales')
        }
        else if (index == 1 && token == 'internal2') {
            navigate('/marketing')
        }
    };

    React.useEffect(() => {
        let total_url = window.location.pathname.split('/')
        let url = total_url[1];
        if (url == "users-1-dashboard" && token == 'internal1') {
            setSelectedIndex(0)
        }
        else if (url == "products" && token == 'internal1') {
            setSelectedIndex(1)
        }
        else if (url == "sales" && token == 'internal2') {
            setSelectedIndex(0)
        }
        else if (url == "marketing" && token == 'internal2') {
            setSelectedIndex(1)
        }

    }, []);

    let pageTitlePath = location.pathname;
    useEffect(() => {
        if (pageTitlePath == '/') {
            setPageTitle("Home")
        } else {
            setPageTitle(pageTitlePath.trim().split('/').join(" ").replace("-", " "))
        }
    }, [pageTitlePath])

    const handleDrawerOpen = () => {
        setOpen(!open);
    };


    const handleLogout = () => {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>

                    <IconButton
                        color="inherit"
                        size="large"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        {pageTitle.toLocaleUpperCase()}
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    {/* this is for desktop view */}
                    {token == 'internal1' && (<>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <div>
                                <Button variant="contained" color="error" style={{ marginLeft: "10px" }} onClick={() => handleLogout()} >Logout</Button>
                            </div>
                        </Box>
                    </>)}

                    {token == 'internal2' && (<>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={1} color="error">
                                    <MessageIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={1} color="error">
                                    <NotificationImportantIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountBoxIcon />
                            </IconButton>
                            <div>
                                <Button variant="contained" color="error" style={{ marginLeft: "10px" }} onClick={() => handleLogout()} >Logout</Button>
                            </div>
                        </Box>
                    </>)}

                    {/* this is for mobile view */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>

            {renderMobileMenu}
            {renderMenu}

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <div style={{ width: "100%", textAlign: "center" }} >
                        <h3 style={{ color: "#1976D1" }} >Demo</h3>
                    </div>
                </DrawerHeader>
                <Divider />

                <List>
                    {itemsList.map((item, index) => {
                        const { text, icon, indexes } = item;
                        return (
                            <ListItem key={index} disablePadding
                                sx={{
                                    backgroundColor:
                                        selectedIndex === indexes
                                            ? "#1976D1"
                                            : "transparent",
                                    color:
                                        selectedIndex === indexes
                                            ? "#fff"
                                            : "#1976D1",
                                    "&$selected:hover": {
                                        backgroundColor: "#1976D1",
                                        color: "#fff"
                                    },
                                    "&:hover": {
                                        backgroundColor: "#606060FF",
                                        color: "#D6ED17FF",
                                        "& .MuiListItemIcon-root": {
                                            color: "#D6ED17FF",
                                        }
                                    },
                                }}
                                onClick={(event) => handleListItemClick(event, indexes)}
                            >
                                <ListItemButton>
                                    <ListItemIcon
                                        sx={{
                                            ml: "2rem",
                                            color:
                                                selectedIndex === indexes
                                                    ? "#fff"
                                                    : "#1976D1",
                                        }}
                                    >
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
            </Main>
        </Box>
    );
}

export default InternalDrawer
