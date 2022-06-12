import { Box } from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box flex={2} bgcolor='dodgerblue' p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      Rightbar
    </Box>
  );
};

export default Rightbar;
