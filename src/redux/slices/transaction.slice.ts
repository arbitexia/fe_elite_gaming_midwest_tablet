import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { transactionApi } from '@/redux/apis';
import { RootState, AppDispatch } from '@/redux/store';
import {
  ReduxJson,
  CommonType,
  TransactionType,
  ResponseStatus,
} from '@/types';

// Initial state
const initialState: ReduxJson.TransactionState = {
  loading: true,
  status: null,
  message: null,
  error: null,
};

export const createTransaction = createAsyncThunk<
  CommonType.Message,
  TransactionType.Body,
  { dispatch: AppDispatch; state: RootState }
>(
  'transaction/createTransaction',
  async (params: TransactionType.Body, thunkAPI) => {
    try {
      return await transactionApi.createTransaction(params);
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);

export const requestCouponTransaction = createAsyncThunk<
  CommonType.Message,
  TransactionType.CouponBody,
  { dispatch: AppDispatch; state: RootState }
>(
  'transaction/requestCouponTransaction',
  async (params: TransactionType.CouponBody, thunkAPI) => {
    try {
      return await transactionApi.requestCouponTransaction(params);
    } catch (error) {
      const err = error as AxiosError;
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);

// Actual Slice
export const transactionSlice = createSlice({
  name: 'Transaction',
  initialState,
  reducers: {
    resetTransactionMessage: (state: ReduxJson.TransactionState, _payload) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.error = null;
        state.message = null;
      })
      .addCase(
        createTransaction.fulfilled,
        (state, { payload }: PayloadAction<CommonType.Message>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.message = payload.message;
        }
      )
      .addCase(createTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.error = payload as string;
        state.message = null;
      })
      .addCase(requestCouponTransaction.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.error = null;
        state.message = null;
      })
      .addCase(
        requestCouponTransaction.fulfilled,
        (state, { payload }: PayloadAction<CommonType.Message>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.message = payload.message;
        }
      )
      .addCase(requestCouponTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.error = payload as string;
        state.message = null;
      });
  },
});

export const { resetTransactionMessage } = transactionSlice.actions;

export const transactionSelector = (state: RootState) => state.transaction;

export default transactionSlice.reducer;
