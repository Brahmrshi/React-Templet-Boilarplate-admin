import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import Header from './components/Header';

const App = () => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeProvider theme={dark ? theme.dark : theme.light}>
      <CssBaseline />
      <Router>
        <Header toggleTheme={toggleTheme} dark={dark} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
