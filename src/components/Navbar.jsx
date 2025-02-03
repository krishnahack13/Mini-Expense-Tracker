import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Expense Tracker
        </Typography>
        <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Link to="/dashboard" style={{ color: 'white', marginRight: '10px' }}>
          Dashboard
        </Link>
        <Link to="/login" style={{ color: 'white', marginRight: '10px' }}>
          Login
        </Link>
        <Link to="/register" style={{ color: 'white' }}>
          Register
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;