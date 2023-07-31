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
  retrieveCustomer,
} from './auth.slice';

export {
  default as pointReducer,
  pointSelector,
  getPoints,
  sendEmailCustomer,
  resetPointMessage,
} from './point.slice';

export {
  default as locationReducer,
  locationSelector,
  getLocations,
  resetLocationMessage,
} from './location.slice';

export {
  default as rewardReducer,
  rewardSelector,
  filterRewards,
  getRewardsByUserId,
  resetRewardMessage,
} from './reward.slice';

export {
  default as transactionReducer,
  transactionSelector,
  createTransaction,
  requestCouponTransaction,
  resetTransactionMessage,
} from './transaction.slice';
