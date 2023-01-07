import type { AppProps } from 'next/app';
import { useStore } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '@/redux/store';
import {
  AppToastProvider,
  AppThemeProvider,
  AppTimeoutProvider,
  AppLockScreenProvider,
} from '@/providers';

function EliteApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <AppThemeProvider>
      <AppToastProvider>
        <AppLockScreenProvider>
          <AppTimeoutProvider>
            <PersistGate loading={null} persistor={persistStore(store)}>
              <Component {...pageProps} />
            </PersistGate>
          </AppTimeoutProvider>
        </AppLockScreenProvider>
      </AppToastProvider>
    </AppThemeProvider>
  );
}

export default wrapper.withRedux(EliteApp);
