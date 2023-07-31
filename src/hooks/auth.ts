import { useEffect, useState } from 'react';
import { useAppToast } from '@/providers';
import {
  authorizeTablet,
  authorizeCustomer,
  authSelector,
  clearAuthMessage,
  verifyPhone,
  register,
  retrieveCustomer,
} from '@/redux/slices';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from './redux';
import { ResponseStatus, AuthCallbackStatus } from '@/types';

export interface useAuthProps {
  handleAuthTabletSuccess?: () => void;
  handleAuthVerifySuccess?: () => void;
  handleAuthUserSuccess?: () => void;
  handleAuthRegisterSuccess?: () => void;
}

export const useAuth = ({
  handleAuthTabletSuccess,
  handleAuthVerifySuccess,
  handleAuthUserSuccess,
  handleAuthRegisterSuccess,
}: useAuthProps) => {
  const appToast = useAppToast();
  const router = useRouter();
  const authState = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const [callbackNo, setCallbackNo] = useState<AuthCallbackStatus>(
    AuthCallbackStatus.TABLET
  );

  useEffect(() => {
    if (authState.status === ResponseStatus.FAILED && authState.errorMessage) {
      appToast({ severity: 'error', message: authState.errorMessage });
      dispatch(clearAuthMessage(''));
    }
    if (authState.status === ResponseStatus.SUCCESS && authState.message) {
      appToast({ severity: 'success', message: authState.message });
      dispatch(clearAuthMessage(''));
      if (callbackNo == AuthCallbackStatus.TABLET && handleAuthTabletSuccess)
        handleAuthTabletSuccess();
      if (callbackNo == AuthCallbackStatus.VERIFY && handleAuthVerifySuccess)
        handleAuthVerifySuccess();
      if (callbackNo == AuthCallbackStatus.CUSTOMER && handleAuthUserSuccess)
        handleAuthUserSuccess();
      if (
        callbackNo == AuthCallbackStatus.REGISTER &&
        handleAuthRegisterSuccess
      )
        handleAuthRegisterSuccess();
    }
  }, [authState]);

  const onLoginWithTablet = (identifier: string, password: string) => {
    setCallbackNo(AuthCallbackStatus.TABLET);
    dispatch(authorizeTablet({ identifier, password }));
  };

  const onLoginWithUser = (identifier: string, locationId: number) => {
    setCallbackNo(AuthCallbackStatus.CUSTOMER);
    dispatch(authorizeCustomer({ identifier, locationId }));
  };

  const onVerifyPhone = (token: string, locationId: number) => {
    setCallbackNo(AuthCallbackStatus.VERIFY);
    dispatch(verifyPhone({ token, locationId }));
  };

  const onRegister = (
    phone: string,
    email: string,
    birthday: string,
    locationId?: number
  ) => {
    setCallbackNo(AuthCallbackStatus.REGISTER);
    dispatch(register({ phone, email, birthday, locationId }));
  };

  const onLogoutFromTablet = () => {
    router.push('/');
  };

  const onGetUserById = async (id: number) => {
    await dispatch(retrieveCustomer({ userId: id }));
  };

  return {
    isTabletAuthenticated: authState.accessToken ? true : false,
    isUserAuthenticated: authState.user ? true : false,
    authTabletToken: authState.accessToken,
    me: authState.user,
    tabletLocation: authState.location,
    onLoginWithTablet,
    onLoginWithUser,
    onVerifyPhone,
    onLogoutFromTablet,
    onRegister,
    onGetUserById,
    onLogout: () => {
      router.push('/');
    },
  };
};
