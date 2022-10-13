import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// routes
import Routers from '@/routes/Routers';
// date-fns
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// theme
import ThemeConfig from '@/theme';
import GlobalStyles from '@/theme/globalStyles';

import Nav from '@/layout/Nav';

const App = () => {
  return (
    <ThemeConfig>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <Nav />
          <Routers />
        </Router>
      </LocalizationProvider>
    </ThemeConfig>
  );
};

export default App;
