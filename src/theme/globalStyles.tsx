// material
import { alpha, useTheme } from '@mui/material/styles';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import React from 'react';

const GlobalStyles = () => {
  const { palette } = useTheme();
  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          scrollbarColor: `${palette.primary.main} ${alpha(palette.grey[500], 0.1)}`,
          scrollbarWidth: 'thin',
        },

        html: {
          width: '100%',
          height: '100%',
          msTextSizeAdjust: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          height: '100%',
          backgroundColor: palette.background.paper,
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': { margin: 0, WebkitAppearance: 'none' },
            '&::-webkit-inner-spin-button': { margin: 0, WebkitAppearance: 'none' },
          },
        },
        textarea: {
          '&::-webkit-input-placeholder': { color: palette.text.disabled },
          '&::-moz-placeholder': { opacity: 1, color: palette.text.disabled },
          '&:-ms-input-placeholder': { color: palette.text.disabled },
          '&::placeholder': { color: palette.text.disabled },
        },
        a: { color: palette.primary.main },
        img: { display: 'block', maxWidth: '100%' },
        '.grecaptcha-badge': {
          visibility: 'hidden',
          opacity: 0,
        },
      }}
    />
  );
};

export default GlobalStyles;
