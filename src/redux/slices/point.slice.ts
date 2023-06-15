import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pointApi } from '@/redux/apis';
import { AxiosError } from 'axios';
import { RootState, AppDispatch } from '@/redux/store';
import {
  ReduxJson,
  ResponseStatus,
  GetPointParam,
  PointType,
  CommonType,
  CustomerEmailParam,
} from '@/types';

// Initial state
const initialState: ReduxJson.PointState = {
  loading: true,
  status: null,
  points: [],
  message: null,
  error: null,
};

export const getPoints = createAsyncThunk<
  PointType[],
  GetPointParam,
  { dispatch: AppDispatch; state: RootState }
>('points', async (params: GetPointParam, thunkAPI) => {
  try {
    return await pointApi.getPoints(params);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

export const sendEmailCustomer = createAsyncThunk<
  CommonType.Message,
  CustomerEmailParam,
  { dispatch: AppDispatch; state: RootState }
>('points/sendEmailCustomer', async (params: CustomerEmailParam, thunkAPI) => {
  try {
    return await pointApi.sendEmail(params);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

// Actual Slice
export const pointSlice = createSlice({
  name: 'point',
  initialState,
  reducers: {
    resetPointMessage: (state: ReduxJson.PointState, _payload) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPoints.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.error = null;
        state.message = null;
      })
      .addCase(
        getPoints.fulfilled,
        (state, { payload }: PayloadAction<PointType[]>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.points = payload;
        }
      )
      .addCase(getPoints.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.error = payload as string;
        state.message = null;
      })
      .addCase(sendEmailCustomer.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.error = null;
        state.message = null;
      })
      .addCase(
        sendEmailCustomer.fulfilled,
        (state, { payload }: PayloadAction<CommonType.Message>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.message = payload.message;
        }
      )
      .addCase(sendEmailCustomer.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.error = payload as string;
        state.message = null;
      });
  },
});

export const { resetPointMessage } = pointSlice.actions;

export const pointSelector = (state: RootState) => state.point;

export default pointSlice.reducer;
