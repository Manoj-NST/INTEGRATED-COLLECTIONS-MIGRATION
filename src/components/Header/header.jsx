import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useHistory} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MifixLogo from '../../assets/logo.png';
import DashboardIcon from '../../assets/overview-icon.svg';
import SearchIcon from '@mui/icons-material/Search';
import SimpleAccordion from '../monthlyCollectionPerformance/monthlyCollectionPerformance';
import { logout } from '../../service/auth.service';

const pages = ['{DashboardIcon}'];


const ResponsiveAppBar = () => {
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    window.localStorage.getItem('user');
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOut = () => {
    logout();
    handleCloseUserMenu();
    history.push("/login");
  }


  const theme = createTheme({
    status: {
      danger: '#E53E3E',
    },
    palette: {
      primary: {
        main: '#0971F1',
        darker: '#053E85',
      },
      neutral: {
        main: '#000000',
        contrastText: '#fff',
      },
      heaven: {
        main: '#FFFFFF',
      },
    },
  });
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="neutral">
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            <img src={MifixLogo} alt="Mifix"/>
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button onClick={handleCloseNavMenu}>
                <img src={DashboardIcon} alt="Mifix"/>
              </Button>
            </Box>
            <Button>
              <SearchIcon fontSize="large" color="heaven"></SearchIcon>
            </Button>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
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
                <MenuItem key="logout" onClick={logOut}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Button variant="filled" color="neutral" onClick={refreshPage}>
        <Typography fontSize="large">Dashboard</Typography>
      </Button>
      <br />
      <SimpleAccordion />
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;