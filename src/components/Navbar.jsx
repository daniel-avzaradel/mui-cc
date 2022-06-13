import React from 'react';
import { AppBar, Badge, Box, InputBase, styled, Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material';
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
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

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
          <Avatar sx={{ width: 30, height: 30 }} onClick={handleClick} />
        </Icons>
        <UserBox onClick={handleClick}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant='span'>Daniel</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        anchorEl={anchorEl}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
