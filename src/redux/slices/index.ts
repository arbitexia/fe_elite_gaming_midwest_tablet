export {
  default as appReducer,
  appSelector,
  toggleThemeMode,
  setUILoading,
} from './app.slice';

export {
  default as authReducer,
  authSelector,
  authorizeTablet,
  authorizeCustomer,
  register,
  verifyPhone,
  getReturnMessage,
  getMe,
  getRole,
  clearAuthMessage,
  refreshToken,
  logoutTablet,
} from './auth.slice';

export {
  default as pointReducer,
  pointSelector,
  getPoints,
  resetPointMessage,
} from './point.slice';
