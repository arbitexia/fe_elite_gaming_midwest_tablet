/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext, createContext, ReactNode } from 'react';
import { AlertColor } from '@mui/material';
import { AppToast } from '@/components/App';

type ToastContextType = {
  severity?: AlertColor | null;
  message?: string | null;
  isOnBlur?: boolean;
};

const AppToastContext = createContext<any>(null);
AppToastContext.displayName = `AppToastContext`;

interface AppToastProviderProps {
  children: ReactNode | ReactNode[];
}

function AppToastProvider({ children, ...rest }: AppToastProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [severity, setSeverity] = useState<AlertColor>('success');
  const [blurStatus, setBlurStatus] = useState<boolean>(false);

  const value = ({ severity, message, isOnBlur }: ToastContextType) => {
    setOpen(true);
    setMessage(message || '');
    setSeverity(severity || 'success');
    setBlurStatus(isOnBlur || false);
  };

  return (
    <AppToastContext.Provider value={value} {...rest}>
      <AppToast
        open={open}
        message={message}
        severity={severity}
        onClose={(e, r) => {
          if (blurStatus && r === 'clickaway') {
            setTimeout(() => {
              setOpen(false);
            }, 3000);
          } else {
            setOpen(false);
          }
        }}
      />
      {children}
    </AppToastContext.Provider>
  );
}

const useAppToast = () => useContext(AppToastContext);

export { AppToastProvider, useAppToast };
