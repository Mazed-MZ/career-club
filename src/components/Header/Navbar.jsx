import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { UserContext } from '../providers/AuthProvider';


export default function Navbar() {
    const ColorTheme = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    const { user, logout } = useContext(UserContext);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleSignout = () => {
        logout()
            .then(() => { })
            .catch((error) => { console.error(error) })
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div>

            <AppBar position="absolute">
                <ColorTheme>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <IconButton onClick={handleOpenUserMenu}>
                                <Link to="/home"><img alt="Career Club" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNASt50W1KrN707n1pipa2eS-j4vWM7Vf8A&usqp=CAU" style={{ borderRadius: 120, width: 80 }} /></Link>
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'arial',
                                    fontWeight: 600,
                                    fontSize: 30,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                <Link to="/home">Career Club</Link>
                            </Typography>

                            {/* ---->>>> Mobile Device <<<<---- */}
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    <Link to="/statistics" style={{ textDecoration: 'none', color: 'black' }}><MenuItem key="" onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Statistics</Typography>
                                    </MenuItem></Link>
                                    <Link to="/appliedjobs" style={{ textDecoration: 'none', color: 'black' }}><MenuItem key="" onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Applied Jobs</Typography>
                                    </MenuItem></Link>
                                    <Link to="/jobs" style={{ textDecoration: 'none', color: 'black' }}><MenuItem key="" onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Jobs</Typography>
                                    </MenuItem></Link>
                                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><MenuItem key="" onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Notice</Typography>
                                    </MenuItem></Link>
                                </Menu>
                            </Box>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'arial',
                                    fontSize: 15,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                <Link to="/home">Career Club</Link>
                            </Typography>


                            {/* ----->> Large Device <<----- */}
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mx: 25 }}>
                                <Button
                                    key=''
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 3, mx: 3, color: 'white', display: 'block' }}
                                >
                                    <Link to="/statistics">Statistics</Link>
                                </Button>
                                {
                                    user && <Button
                                    key=''
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 3, mx: 3, color: 'white', display: 'block' }}
                                >
                                    <Link to="/appliedjobs">Applied Jobs</Link>
                                </Button> 
                                }
                                <Button
                                    key=''
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 3, mx: 3, color: 'white', display: 'block' }}
                                >
                                    <Link to="/jobs">Jobs</Link>
                                </Button>
                                <Button
                                    key=''
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 3, mx: 3, color: 'white', display: 'block' }}
                                >
                                    <Link to="/">Notice</Link>
                                </Button>
                            </Box>



                            {/* ---->>>> Avater Icon <<<<---- */}
                            {
                                user ? <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <img alt="Remy Sharp" src={user.photoURL} style={{ borderRadius: 120, width: 80 }} />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><MenuItem key="" onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">Profile</Typography>
                                        </MenuItem></Link>
                                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><MenuItem key="" onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">Account</Typography>
                                        </MenuItem></Link>
                                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><MenuItem key="" onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">Dashboard</Typography>
                                        </MenuItem></Link>
                                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><MenuItem key="" onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center" onClick={handleSignout}>Log Out</Typography>
                                        </MenuItem></Link>
                                    </Menu>
                                </Box> : <Button
                                    key=''
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 3, color: 'white', display: 'block' }}
                                >
                                    <Link to="/signin">Log In</Link>
                                </Button>
                            }
                        </Toolbar>
                    </Container>
                </ColorTheme>
            </AppBar>
        </div>
    )
}
