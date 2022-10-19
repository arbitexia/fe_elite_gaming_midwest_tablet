import { useState, useEffect, createContext, ReactNode } from 'react';
import { AppConfirm } from '@/components/App';
import { useRouter } from 'next/router';

const AppTimeoutContext = createContext<any>(null);

AppTimeoutContext.displayName = `AppTimeoutContext`;

interface AppTimeoutProviderProps {
  children: ReactNode | ReactNode[];
}

const whitelist = ['/auth/[type]', '/points'];

function AppTimeoutProvider({ children }: AppTimeoutProviderProps) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  let timeout: NodeJS.Timeout | null = null;

  const restartAutoReset = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      setOpen(true);
    }, 1000 * 15);
  };

  const onMouseMove = () => {
    restartAutoReset();
  };

  const handleYes = () => {
    setOpen(false);
    restartAutoReset();
  };
  const handleNo = () => {
    setOpen(false);
    router.push('/auth/checkin');
  };
  useEffect(() => {
    let preventReset = false;

    for (const path of whitelist) {
      if (path === router.pathname) {
        preventReset = true;
      }
    }
    if (preventReset) return;

    restartAutoReset();
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        window.removeEventListener('mousemove', onMouseMove);
      }
    };
  }, [router.pathname]);
  return (
    <AppTimeoutContext.Provider value={null}>
      <AppConfirm open={open} handleYes={handleYes} handleNo={handleNo} />
      {children}
    </AppTimeoutContext.Provider>
  );
}

export { AppTimeoutProvider };
