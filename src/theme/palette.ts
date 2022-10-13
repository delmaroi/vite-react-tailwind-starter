import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

interface GradientsPaletteOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
  }
}

declare module '@mui/material' {
  interface Color {
    0: string;
    100_01: string;
    200_01: string;
    500_04: string;
    500_08: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_64: string;
    500_80: string;
  }
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#6c9eb0',
  light: '#307489',
  main: '#155263',
  dark: '#053f4e',
  darker: '#446A78',
};
const SECONDARY = {
  lighter: '#fef189',
  light: '#fae75b',
  main: '#ffca58',
  dark: '#fab450',
  darker: '#f28f42',
};
const INFO = {
  lighter: '#bbdefb',
  light: '#63b4f6',
  main: '#2196f3',
  dark: '#1a75d2',
  darker: '#1045a1',
};
const SUCCESS = {
  lighter: '#b5f4c7',
  light: '#00e677',
  main: '#00d437',
  dark: '#00b01c',
  darker: '#007c00',
};
const WARNING = {
  lighter: '#ffecb3',
  light: '#ffd54f',
  main: '#ffc107',
  dark: '#ffa000',
  darker: '#ff6f00',
};
const ERROR = {
  lighter: '#ffcace',
  light: '#f06a68',
  main: '#ff2d1e',
  dark: '#df091b',
  darker: '#c40000',
};
const GREY = {
  100: '#cfd8dc',
  200: '#b0bec5',
  300: '#90a4ae',
  400: '#78909c',
  500: '#607d8b',
  600: '#546e7a',
  700: '#455a64',
  800: '#37474f',
  900: '#263238',
  100_01: '#F3F5F7',
  200_01: '#E2E8F0',
  500_04: alpha('#9e9e9e', 0.04),
  500_08: alpha('#9e9e9e', 0.08),
  500_12: alpha('#9e9e9e', 0.12),
  500_16: alpha('#9e9e9e', 0.16),
  500_24: alpha('#9e9e9e', 0.24),
  500_32: alpha('#9e9e9e', 0.32),
  500_48: alpha('#9e9e9e', 0.48),
  500_56: alpha('#9e9e9e', 0.56),
  500_64: alpha('#9e9e9e', 0.64),
  500_80: alpha('#9e9e9e', 0.8),
};

const palette = {
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  primary: {
    ...PRIMARY,
    contrastText: '#ffffff',
  },
  secondary: { ...SECONDARY, contrastText: '#ffffff' },
  info: { ...INFO, contrastText: '#ffffff' },
  success: { ...SUCCESS, contrastText: '#ffffff' },
  warning: { ...WARNING, contrastText: '#ffffff' },
  error: { ...ERROR, contrastText: '#ffffff' },
  gradients: {
    primary: createGradient(PRIMARY.light, PRIMARY.main),
    info: createGradient(INFO.light, INFO.main),
    success: createGradient(SUCCESS.light, SUCCESS.main),
    warning: createGradient(WARNING.light, WARNING.main),
    error: createGradient(ERROR.light, ERROR.main),
  },
  grey: GREY,
  text: { primary: GREY[900], secondary: GREY[600], disabled: GREY[400] },

  background: {
    paper: '#ffffff',
    default: '#fafafa',
    neutral: alpha(PRIMARY.main, 0.045),
  },
  action: {
    active: GREY[500],
    hover: GREY[500_12],
    hoverOpacity: 0.12,
    selected: GREY[500_24],
    selectedOpacity: 0.24,
    disabled: GREY[500_48],
    disabledBackground: GREY[500_24],
    disabledOpacity: 0.24,
    focus: GREY[500_24],
    focusOpacity: 0.24,
    activatedOpacity: 0.24,
  },
  divider: GREY[500_16],
};

export default palette;
