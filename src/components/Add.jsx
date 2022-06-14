import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Divider, Button, Box, Modal, styled, Tooltip, Typography, Avatar, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    width: '30vw',
    height: 60,
  },
}));

const Add = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Tooltip title='Add' sx={{ bottom: 20, left: { xs: 'calc(50% - 25px)', md: '20px' } }} onClick={(e) => setOpen(true)}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box bgcolor='white' borderRadius={5} p={3}>
          <Typography variant='h6' color='gray' textAlign='center'>
            Create Post
          </Typography>
          <Divider />
          <UserBox my={2}>
            <Avatar alt='Remy Sharp' src='https://material-ui.com/static/images/avatar/1.jpg' sx={{ mr: 1 }} />
            <Typography variant='span'>Daniel Avzaradel</Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%', bgcolor: '#f2f2f2' }}
            id='standard-multiline-static'
            multiline
            rows={4}
            placeholder='What is on your mind?'
            variant='standard'
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
            <Button variant='contained' endIcon={<SendIcon />} onClick={(e) => setOpen(false)}>
              Submit
            </Button>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
