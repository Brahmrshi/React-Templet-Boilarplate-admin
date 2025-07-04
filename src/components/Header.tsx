import React from 'react';
import { AppBar, Toolbar, Typography, Switch } from '@mui/material';

interface HeaderProps {
  toggleTheme: () => void;
  dark: boolean;
}

const Header = ({ toggleTheme, dark }: HeaderProps) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Admin Dashboard
      </Typography>
      <Switch checked={dark} onChange={toggleTheme} />
    </Toolbar>
  </AppBar>
);

export default Header;
