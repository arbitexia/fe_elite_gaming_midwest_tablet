import {
  authSelector,
  setUserAuthState,
  setTabletAuthState,
} from '@/redux/slices';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from './redux';

export const useAuth = () => {
  const router = useRouter();
  const authState = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  const onLoginWithTablet = (authToken: string): boolean => {
    dispatch(setTabletAuthState(authToken));
    return true;
  };

  const onLoginWithUser = (authToken: string) => {
    dispatch(setUserAuthState(authToken));
    router.push('/');
  };

  const onLogoutFromTablet = () => {
    dispatch(setTabletAuthState(''));
    router.push('/');
  };

  return {
    isTabletAuthenticated: authState.authTabletToken ? true : false,
    isUserAuthenticated: authState.authUserToken ? true : false,
    authUserToken: authState.authUserToken,
    authTabletToken: authState.authTabletToken,
    onLoginWithTablet,
    onLoginWithUser,
    onLogoutFromTablet,
    onLogout: () => {
      dispatch(setUserAuthState(''));
      router.push('/');
    },
  };
};
