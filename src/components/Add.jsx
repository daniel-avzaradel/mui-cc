import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab, IconButton, Tooltip } from '@mui/material';

const Add = () => {
  return (
    <>
      <Tooltip title='Add' sx={{ bottom: 20, left: { xs: 'calc(50% - 25px)', md: '20px' } }}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
