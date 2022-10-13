import React, { useEffect, useMemo } from 'react';
import NProgress from 'nprogress';
// material
import { styled, Theme, useTheme } from '@mui/material/styles';
import { Backdrop, Box, CircularProgress, GlobalStyles } from '@mui/material';
// types
import { SxProps } from '@mui/system';
import { TransitionProps } from '@mui/material/transitions/transition';

const defaultLoaderSize = 48;

export function ProgressBarStyle() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        '#nprogress': {
          pointerEvents: 'none',
          '& .bar': {
            top: 0,
            left: 0,
            height: 2,
            width: '100%',
            position: 'fixed',
            zIndex: theme.zIndex.snackbar,
            backgroundColor: theme.palette.primary.main,
            boxShadow: `0 0 2px ${theme.palette.primary.main}`,
          },
          '& .peg': {
            right: 0,
            opacity: 1,
            width: 100,
            height: '100%',
            display: 'block',
            position: 'absolute',
            transform: 'rotate(3deg) translate(0px, -4px)',
            boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`,
          },
        },
      }}
    />
  );
}

function ProgressBar() {
  NProgress.configure({
    showSpinner: false,
  });

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return null;
}

const RootStyle = styled(Backdrop)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  background: `${theme.palette.background.paper} !important`,
  zIndex: 20,
  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: defaultLoaderSize * 2,
    height: defaultLoaderSize * 2,
    boxShadow: theme.shadows[12],
    backgroundColor: theme.palette.background.default,
  },
}));

export interface LoadingScreenProps {
  open?: boolean;
  transitionDuration?: TransitionProps['timeout'];
  transparent?: boolean;
  sx?: SxProps<Theme>;
}

const LoadingScreen = (props: LoadingScreenProps) => {
  const { open, transitionDuration, sx, transparent, ...other } = props;

  const backgroundColor = transparent ? { background: 'transparent !important' } : {};

  return (
    <>
      <ProgressBar />

      <RootStyle
        open={!!open}
        transitionDuration={transitionDuration}
        sx={{ backgroundColor, ...sx }}
      >
        <Box
          sx={{
            width: defaultLoaderSize * 2,
            height: defaultLoaderSize * 2,
          }}
          {...other}
        >
          <CircularProgress size={defaultLoaderSize} />
        </Box>
      </RootStyle>
    </>
  );
};

LoadingScreen.defaultProps = {
  transitionDuration: { enter: 0, exit: 100 },
  transparent: false,
} as Partial<LoadingScreenProps>;

export default LoadingScreen;
