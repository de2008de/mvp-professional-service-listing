import AppBar from '@mui/material/AppBar';
import AppBarLogo from '../../components/AppBarLogo';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useState } from 'react';
import './style.css';

const pages = [
    ['Home', '/'], 
    ['Services', 'services'], 
    ['About', 'about']
];


const MyAppBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box component="div" className="MyAppBar">
            <AppBar position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
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
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                <Link style={{textDecoration: "none", color: "inherit"}} to={page[1]}>
                                                    {page[0]}
                                                </Link>
                                            </Typography>
                                        </MenuItem>
                                    ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <AppBarLogo xs="flex" md="none" />
                        </Box>


                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <AppBarLogo xs="none" md="flex" />
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link style={{textDecoration: "none", color: "inherit"}} to={page[1]}>
                                        {page[0]}
                                    </Link>
                                </Button>
                            ))}
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default MyAppBar;
