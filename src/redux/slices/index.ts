export {
  default as appReducer,
  appSelector,
  toggleThemeMode,
  setUILoading,
} from './app.slice';

export {
  default as assetReducer,
  assetSelector,
  clearAssetMessage,
  setGalleries,
  removeGalleryItem,
  addGalleryItem,
} from './asset.slice';

export {
  default as authReducer,
  authSelector,
  authorizeTablet,
  authorizeCustomer,
  register,
  verifyPhone,
  getReturnMessage,
  getMe,
  getMyLocation,
  getRole,
  clearAuthMessage,
  refreshToken,
  logoutTablet,
} from './auth.slice';

export {
  default as locationReducer,
  locationSelector,
  getLocations,
  getLocation,
  resetLocationMessage,
} from './location.slice';

export {
  default as pointReducer,
  pointSelector,
  getPoints,
  resetPointMessage,
} from './point.slice';

export {
  default as productReducer,
  productSelector,
  getProducts,
  getProduct,
  resetProductMessage,
} from './product.slice';
