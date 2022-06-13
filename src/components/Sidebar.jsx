import React from 'react';
import SidebarList from './SidebarList';

import { Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <SidebarList />
    </Box>
  );
};

export default Sidebar;
