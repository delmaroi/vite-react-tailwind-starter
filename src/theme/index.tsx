import React, { ReactNode } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, ThemeOptions, createTheme } from '@mui/material/styles';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
//
import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import shadows, { customShadows } from './shadows';
import { mixins } from './mixins';
import componentsOverride from './overrides';

type ThemeConfigProps = {
  children: ReactNode;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const themeOptions: ThemeOptions = {
    palette: { ...palette, mode: 'light' },
    shape,
    typography,
    breakpoints,
    direction: 'ltr',
    shadows,
    customShadows,
  };

  const theme = createTheme(themeOptions);
  theme.mixins = mixins(theme);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
