import { useState, createContext, useContext, ReactNode } from 'react';
import { AppLockScreen } from '@/components/App/LockScreen';

const AppLockScreenContext = createContext<any>(null);

AppLockScreenContext.displayName = `AppLockScreenContext`;

interface AppLockScreenProviderProps {
  children: ReactNode | ReactNode[];
}

function AppLockScreenProvider({
  children,
  ...rest
}: AppLockScreenProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  const value = () => {
    setOpen(true);
  };
  return (
    <AppLockScreenContext.Provider value={value} {...rest}>
      <AppLockScreen open={open} handleClose={() => setOpen(false)} />
      {children}
    </AppLockScreenContext.Provider>
  );
}
const useAppLockScreen = () => useContext(AppLockScreenContext);

export { AppLockScreenProvider, useAppLockScreen };
