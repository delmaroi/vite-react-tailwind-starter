import { alpha, Theme } from '@mui/material/styles';

export default function IconButton({ palette, shape }: Theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: 48,
          height: 48,
          minHeight: 48,
          minWidth: 48,
          borderRadius: 24,
          backgroundColor: palette.action.hover,
          color: palette.text.primary,
          '&:hover, &:focus, &:active, &.Mui-focusVisible': {
            backgroundColor: palette.action.selected,
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
          },
        },
        sizeMedium: {
          width: 40,
          height: 40,
          minHeight: 40,
          minWidth: 40,
        },
        sizeSmall: {
          width: 36,
          height: 36,
          minHeight: 36,
          minWidth: 36,
        },
        colorPrimary: {
          color: palette.primary.main,
          backgroundColor: alpha(palette.primary.main, palette.action.hoverOpacity),
          '&:hover, &:focus, &:active, &.Mui-focusVisible': {
            color: palette.primary.main,
            backgroundColor: alpha(palette.primary.main, palette.action.selectedOpacity),
          },
        },
        colorSecondary: {
          color: palette.secondary.main,
          backgroundColor: alpha(palette.secondary.main, palette.action.hoverOpacity),
          '&:hover, &:focus, &:active, &.Mui-focusVisible': {
            color: palette.secondary.main,
            backgroundColor: alpha(palette.secondary.main, palette.action.selectedOpacity),
          },
        },
        colorError: {
          color: palette.error.main,
          backgroundColor: alpha(palette.error.main, palette.action.hoverOpacity),
          '&:hover, &:focus, &:active, &.Mui-focusVisible': {
            color: palette.error.main,
            backgroundColor: alpha(palette.error.main, palette.action.selectedOpacity),
          },
        },
        colorInfo: {
          color: palette.info.main,
          backgroundColor: alpha(palette.info.main, palette.action.hoverOpacity),
          '&:hover, &:focus, &:active, &.Mui-focusVisible': {
            color: palette.info.main,
            backgroundColor: alpha(palette.info.main, palette.action.selectedOpacity),
          },
        },
        colorSuccess: {
          color: palette.success.main,
          backgroundColor: alpha(palette.success.main, palette.action.hoverOpacity),
          '&:hover, &:focus, &:active, &.Mui-focusVisible': {
            color: palette.success.main,
            backgroundColor: alpha(palette.success.main, palette.action.selectedOpacity),
          },
        },
        colorWarning: {
          color: palette.warning.main,
          backgroundColor: alpha(palette.warning.main, palette.action.hoverOpacity),
          '&:hover, &:focus, &:active, &.Mui-focusVisible': {
            color: palette.warning.main,
            backgroundColor: alpha(palette.warning.main, palette.action.selectedOpacity),
          },
        },
      },
    },
  };
}
