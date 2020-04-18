import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlocalStyles from './styles/GlobalStyles';

import Light from './styles/themes/Light';
import Dark from './styles/themes/Dark';

import logo from './assets/logo.svg';

import Head from './components/Head';
import Routes from './routes';

function App() {
  const [ theme, setTheme ] = useState(Dark);
  return (
    <ThemeProvider theme={theme}>
      <Head title="Instagram" description="Recriação do Instagram" favicon={logo} appleTouchIcon={logo} />
      <GlocalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
