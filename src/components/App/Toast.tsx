import { SyntheticEvent } from 'react';
import {
  Snackbar,
  Alert,
  AlertColor,
  SnackbarCloseReason,
} from '@mui/material';

interface AppToastProps {
  open: boolean;
  message: string;
  severity: AlertColor;
  onClose:
    | ((
        event: Event | SyntheticEvent<Element, Event>,
        reason?: SnackbarCloseReason
      ) => void)
    | undefined;
}

const AppToast = ({ open, message, severity, onClose }: AppToastProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={onClose}
        severity={severity}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppToast;
