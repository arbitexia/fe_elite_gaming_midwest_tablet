import { useState, useEffect, createContext, ReactNode } from 'react';
import { AppConfirm } from '@/components/App';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/hooks';
import { logoutUser } from '@/redux/slices/auth.slice';
import { useSelectedLanguage } from 'next-export-i18n';

const AppTimeoutContext = createContext<any>(null);

AppTimeoutContext.displayName = `AppTimeoutContext`;

interface AppTimeoutProviderProps {
  children: ReactNode | ReactNode[];
}

// const whitelist = ['/', '/rewards', '/points', '/rewards/[id]'];
const whitelist = ['/'];

function AppTimeoutProvider({ children }: AppTimeoutProviderProps) {
  const router = useRouter();
  const { lang } = useSelectedLanguage();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const time = 3000;
  let timeout: NodeJS.Timeout | null = null;

  const restartAutoReset = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      setOpen(true);
    }, 1000 * time);
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
    dispatch(logoutUser());
    router.push({
      pathname: '/',
      query: {
        ...(lang === 'es' && { lang }),
      },
    });
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
