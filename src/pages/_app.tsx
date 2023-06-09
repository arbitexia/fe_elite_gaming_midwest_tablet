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
import { setupJwt } from '@/redux/apis/axios.api';
import { appWithTranslation } from 'next-i18next';

function EliteApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  setupJwt(store);
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

export default appWithTranslation(wrapper.withRedux(EliteApp));
