import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';

import { Box, Container, Stack } from '@mui/material';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={{ xs: 0, sm: 2 }} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
