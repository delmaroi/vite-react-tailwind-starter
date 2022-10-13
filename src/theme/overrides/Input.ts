import { Theme } from '@mui/material/styles';

export default function Input({ palette, shape, typography }: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& svg': { color: palette.text.disabled },
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:hover:not(.Mui-focused):not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.main,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&:hover:not(.Mui-focused):not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.main,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: palette.background.paper,
        },
        input: {
          fontWeight: typography.fontWeightMedium,
          background: palette.background.paper,
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: shape.borderRadius,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            color: `${palette.error.main} !important`,
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '& .MuiIconButton-root': {
            backgroundColor: 'transparent',
            '&:hover, &:focus, &:active, &.Mui-focusVisible': {
              // backgroundColor: palette.action.selected,
              backgroundColor: palette.action.hover,
            },
            '&.Mui-disabled': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
  };
}
