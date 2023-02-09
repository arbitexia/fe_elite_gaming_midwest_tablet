import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '@/redux/apis';
import { AxiosError } from 'axios';
import { RootState, AppDispatch } from '@/redux/store';
import {
  ReduxJson,
  CustomerAuthParams,
  CustomerAuthType,
  TabletAuthParams,
  TabletAuthType,
  RegisterParams,
  RegisterType,
  VerifyPhoneParams,
  VerifyPhoneType,
} from '@/types';

export enum ResponseStatus {
  PENDING = 'pending',
  FAILED = 'failed',
  SUCCESS = 'success',
}

// Initial state
const initialState: ReduxJson.AuthState = {
  loading: true,
  status: null,
  accessToken: '',
  refreshToken: '',
  message: '',
  errorMessage: null,
  user: null,
  location: null,
  role: {},
};

export const authorizeTablet = createAsyncThunk<
  TabletAuthType,
  TabletAuthParams,
  { dispatch: AppDispatch; state: RootState }
>('auth/authorizeTablet', async (params: TabletAuthParams, thunkAPI) => {
  try {
    return await authApi.authorizeTablet(params);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

export const authorizeCustomer = createAsyncThunk<
  CustomerAuthType,
  CustomerAuthParams,
  { dispatch: AppDispatch; state: RootState }
>('auth/authorizeCustomer', async (params: CustomerAuthParams, thunkAPI) => {
  try {
    return await authApi.authorizeCustomer(params);
  } catch (error) {
    const err = error as AxiosError;
    err.response?.status === 403 && thunkAPI.dispatch(logoutTablet);
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

export const register = createAsyncThunk<
  RegisterType,
  RegisterParams,
  { dispatch: AppDispatch; state: RootState }
>('auth/register', async (params: RegisterParams, thunkAPI) => {
  try {
    return await authApi.register(params);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

export const verifyPhone = createAsyncThunk<
  VerifyPhoneType,
  VerifyPhoneParams,
  { dispatch: AppDispatch; state: RootState }
>('auth/verifyPhone', async (params: VerifyPhoneParams, thunkAPI) => {
  try {
    return await authApi.verifyPhone(params);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthMessage: (
      state: ReduxJson.AuthState,
      { payload }: PayloadAction<string>
    ) => {
      state.errorMessage = payload;
      state.message = payload;
    },
    refreshToken: (
      state: ReduxJson.AuthState,
      { payload }: PayloadAction<string>
    ) => {
      state.accessToken = payload;
      console.log(payload);
      localStorage.setItem('accessToken', payload);
    },
    logoutUser: (state: ReduxJson.AuthState) => {
      state.user = null;
      state.role = {};
    },
    logoutTablet: (
      state: ReduxJson.AuthState
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // { payload }: PayloadAction<string>
    ) => {
      state.accessToken = '';
      state.refreshToken = '';
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorizeTablet.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.errorMessage = null;
      })
      .addCase(
        authorizeTablet.fulfilled,
        (state, { payload }: PayloadAction<TabletAuthType>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.message = 'Login Success';
          state.accessToken = payload.accessToken;
          state.refreshToken = payload.refreshToken;
          state.location = payload.location;
          localStorage.setItem('accessToken', payload.accessToken);
          localStorage.setItem('refreshToken', payload.refreshToken);
        }
      )
      .addCase(authorizeTablet.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.errorMessage = payload as string;
        state.accessToken = '';
      })
      .addCase(authorizeCustomer.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.errorMessage = null;
      })
      .addCase(
        authorizeCustomer.fulfilled,
        (state, { payload }: PayloadAction<CustomerAuthType>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.message = payload.message;
        }
      )
      .addCase(authorizeCustomer.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.errorMessage = payload as string;
      })
      .addCase(verifyPhone.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.errorMessage = null;
      })
      .addCase(
        verifyPhone.fulfilled,
        (state, { payload }: PayloadAction<VerifyPhoneType>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.user = payload.user;
          state.role = payload.role;
          state.message = 'Verify Success';
          state.refreshToken = payload.refreshToken;
        }
      )
      .addCase(verifyPhone.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.user = {};
        state.role = {};
        state.refreshToken = '';
        state.errorMessage = payload as string;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.errorMessage = null;
      })
      .addCase(
        register.fulfilled,
        (state, { payload }: PayloadAction<RegisterType>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.message = payload.message;
        }
      )
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.errorMessage = payload as string;
      });
  },
});

export const { clearAuthMessage, logoutUser, logoutTablet, refreshToken } =
  authSlice.actions;

export const getReturnMessage = (state: RootState) => state.auth?.message;
export const getMe = (state: RootState) => state.auth?.user;
export const getMyLocation = (state: RootState) => state.auth?.location;
export const getRole = (state: RootState) => state.auth?.role;
export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
