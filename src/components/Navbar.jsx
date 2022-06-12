import React from 'react';
import { AppBar, Badge, Box, InputBase, styled, Toolbar, Typography, Avatar } from '@mui/material';
import PianoIcon from '@mui/icons-material/Piano';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          MUI Crash-Course
        </Typography>
        <PianoIcon />
        <Search>
          <InputBase placeholder='Search...' />
        </Search>
        <Icons>
          <Badge badgeContent={10} color='error'>
            <EmailIcon />
          </Badge>
          <Badge badgeContent={10} color='error' sx={{ m: 2 }}>
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} />
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant='span'>Daniel</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
