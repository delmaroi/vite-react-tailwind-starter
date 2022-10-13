import { Theme } from '@mui/material/styles';

export default function Button({ spacing, shape }: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 40,
          borderRadius: 20,
        },
        sizeSmall: {
          minHeight: 36,
          minWidth: 'auto',
          borderRadius: 18,
        },
        sizeLarge: {
          minHeight: 48,
          minWidth: 'auto',
          borderRadius: 24,
        },
        startIcon: {
          marginRight: spacing(1),
          marginTop: -1,
          marginBottom: -1,
          marginLeft: -2,
          '&$iconSizeSmall': {
            marginLeft: 0,
          },
        },
        endIcon: {
          display: 'inherit',
          marginTop: -1,
          marginBottom: -1,
          marginRight: -2,
          marginLeft: spacing(1),
          '&$iconSizeSmall': {
            marginRight: 0,
          },
        },
      },
    },
  };
}
