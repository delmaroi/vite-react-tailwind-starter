import React, { ReactNode } from 'react';
// material
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// @types
import { ColorSchema } from '@/@types/theme';

interface ConfirmDialogProps {
  className?: string;
  children?: ReactNode;
  variant?: ColorSchema;
  open?: boolean;
  title?: string;
  subtitle?: string;
  applyButtonText?: string;
  cancelButtonText?: string;
  actionApply?: (...args: any[]) => void;
  actionCancel?: (...args: any[]) => void;
  onExit?: (...args: any[]) => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  maxWidth?: DialogProps['maxWidth'];
}

const ConfirmDialog = ({
  className: classNameProp,
  children,
  open,
  variant,
  title,
  subtitle,
  applyButtonText,
  cancelButtonText,
  actionApply,
  actionCancel,
  onExit,
  maxWidth,
  isLoading,
  isDisabled,
}: ConfirmDialogProps) => (
  <Dialog
    maxWidth={maxWidth}
    disableEscapeKeyDown
    open={open || false}
    onClose={onExit}
    className={classNameProp}
  >
    {title && <DialogTitle sx={{ textAlign: 'center' }}>{title}</DialogTitle>}

    {(subtitle || children) && (
      <DialogContent>
        <Stack spacing={2}>
          {subtitle && <Typography>{subtitle}</Typography>}
          {children}
        </Stack>
      </DialogContent>
    )}

    {(applyButtonText || cancelButtonText) && (
      <DialogActions>
        <Stack spacing={0.5} sx={{ width: '100%' }}>
          {applyButtonText && (
            <LoadingButton
              disabled={isDisabled || isLoading}
              loading={isLoading}
              onClick={actionApply}
              variant="contained"
              fullWidth
              size="large"
              color={variant}
              endIcon={isLoading && <CircularProgress size={20} color="inherit" />}
            >
              {applyButtonText}
            </LoadingButton>
          )}

          {cancelButtonText && (
            <Button
              disabled={isLoading}
              onClick={actionCancel}
              fullWidth
              variant="text"
              color="inherit"
              size="large"
            >
              {cancelButtonText}
            </Button>
          )}
        </Stack>
      </DialogActions>
    )}
  </Dialog>
);

ConfirmDialog.defaultProps = {
  open: false,
  variant: 'primary',
  maxWidth: 'xs',
  isLoading: false,
  isDisabled: false,
} as Partial<ConfirmDialogProps>;

export default ConfirmDialog;
