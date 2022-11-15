import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

export interface AuthState {
  authTabletToken: string;
  authUserToken: string;
}

// Initial state
const initialState: AuthState = {
  authTabletToken: '',
  authUserToken: '',
};

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setTabletAuthState(state, action) {
      state.authTabletToken = action.payload;
    },
    setUserAuthState(state, action) {
      state.authUserToken = action.payload;
    },
  },
});

export const { setTabletAuthState, setUserAuthState } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
