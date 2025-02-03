import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({ palette: { mode: darkMode ? 'dark' : 'light' } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;