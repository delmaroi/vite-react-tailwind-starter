import { alpha } from '@mui/material/styles';
import { Shadows } from '@mui/material/styles/shadows';
import palette from './palette';

// ----------------------------------------------------------------------

interface CustomShadowOptions {
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }
}

const LIGHT_MODE = palette.grey[500];

const createShadow = (color: string): Shadows => {
  const transparent1 = alpha(color, 0.18);
  const transparent2 = alpha(color, 0.14);
  const transparent3 = alpha(color, 0.11);
  return [
    'none',
    `0 1px 3px 0 ${transparent1}, 0 1px 1px 1px ${transparent2}, 0 2px 0 -1px ${transparent3}`,
    `0 1px 5px 0 ${transparent1}, 0 2px 3px 1px ${transparent2}, 0 3px 0 -2px ${transparent3}`,
    `0 1px 8px 0 ${transparent1}, 0 3px 5px 1px ${transparent2}, 0 3px 1px -2px ${transparent3}`,
    `0 2px 4px -1px ${transparent1}, 0 4px 6px 1px ${transparent2}, 0 1px 8px 0 ${transparent3}`,
    `0 3px 5px -1px ${transparent1}, 0 5px 10px 1px ${transparent2}, 0 1px 12px 0 ${transparent3}`,
    `0 3px 5px -1px ${transparent1}, 0 6px 12px 1px ${transparent2}, 0 1px 16px 0 ${transparent3}`,
    `0 4px 5px -2px ${transparent1}, 0 6px 12px 2px ${transparent2}, 0 2px 14px 1px ${transparent3}`,
    `0 5px 5px -3px ${transparent1}, 0 7px 12px 2px ${transparent2}, 0 3px 12px 2px ${transparent3}`,
    `0 5px 6px -3px ${transparent1}, 0 7px 14px 2px ${transparent2}, 0 3px 14px 2px ${transparent3}`,
    `0 6px 6px -3px ${transparent1}, 0 8px 17px 2px ${transparent2}, 0 4px 16px 3px ${transparent3}`,
    `0 6px 7px -4px ${transparent1}, 0 8px 18px 2px ${transparent2}, 0 4px 18px 3px ${transparent3}`,
    `0 7px 8px -4px ${transparent1}, 0 9px 21px 3px ${transparent2}, 0 5px 20px 4px ${transparent3}`,
    `0 7px 8px -4px ${transparent1}, 0 9px 25px 3px ${transparent2}, 0 5px 22px 4px ${transparent3}`,
    `0 7px 9px -4px ${transparent1}, 0 10px 26px 3px ${transparent2}, 0 5px 24px 4px ${transparent3}`,
    `0 8px 9px -5px ${transparent1}, 0 11px 27px 3px ${transparent2}, 0 6px 26px 5px ${transparent3}`,
    `0 8px 10px -5px ${transparent1}, 0 12px 29px 3px ${transparent2}, 0 6px 28px 5px ${transparent3}`,
    `0 8px 11px -5px ${transparent1}, 0 13px 31px 3px ${transparent2}, 0 6px 30px 5px ${transparent3}`,
    `0 9px 11px -5px ${transparent1}, 0 14px 33px 3px ${transparent2}, 0 7px 32px 6px ${transparent3}`,
    `0 9px 12px -6px ${transparent1}, 0 15px 35px 3px ${transparent2}, 0 7px 34px 6px ${transparent3}`,
    `0 10px 13px -6px ${transparent1}, 0 16px 37px 4px ${transparent2}, 0 8px 36px 7px ${transparent3}`,
    `0 10px 13px -6px ${transparent1}, 0 17px 40px 4px ${transparent2}, 0 8px 38px 7px ${transparent3}`,
    `0 10px 14px -6px ${transparent1}, 0 18px 42px 4px ${transparent2}, 0 8px 40px 7px ${transparent3}`,
    `0 11px 14px -7px ${transparent1}, 0 19px 43px 4px ${transparent2}, 0 9px 42px 8px ${transparent3}`,
    `0 11px 15px -7px ${transparent1}, 0 20px 46px 4px ${transparent2}, 0 9px 44px 8px ${transparent3}`,
  ];
};

const createCustomShadow = (color: string) => {
  const transparent = alpha(color, 0.24);
  return {
    z1: `0 1px 2px 0 ${transparent}`,
    z8: `0 8px 16px 0 ${transparent}`,
    z12: `0 0 2px 0 ${transparent}, 0 12px 24px 0 ${transparent}`,
    z16: `0 0 2px 0 ${transparent}, 0 16px 32px -4px ${transparent}`,
    z20: `0 0 2px 0 ${transparent}, 0 20px 40px -4px ${transparent}`,
    z24: `0 0 4px 0 ${transparent}, 0 24px 48px 0 ${transparent}`,
    primary: `0 8px 16px 0 ${alpha(palette.primary.main, 0.24)}`,
    info: `0 8px 16px 0 ${alpha(palette.info.main, 0.24)}`,
    secondary: `0 8px 16px 0 ${alpha(palette.secondary.main, 0.24)}`,
    success: `0 8px 16px 0 ${alpha(palette.success.main, 0.24)}`,
    warning: `0 8px 16px 0 ${alpha(palette.warning.main, 0.24)}`,
    error: `0 8px 16px 0 ${alpha(palette.error.main, 0.24)}`,
  };
};

export const customShadows = {
  ...createCustomShadow(LIGHT_MODE),
};

const shadows: Shadows = createShadow(LIGHT_MODE);

export default shadows;
