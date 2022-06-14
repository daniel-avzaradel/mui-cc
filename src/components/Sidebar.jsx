import React from 'react';
import SidebarList from './SidebarList';

import { Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Box flex={1.2} p={2} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <Box position='fixed'>
        <SidebarList />
      </Box>
    </Box>
  );
};

export default Sidebar;
