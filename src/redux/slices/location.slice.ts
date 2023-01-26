import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { locationApi } from '@/redux/apis';
import { AxiosError } from 'axios';
import { RootState, AppDispatch } from '@/redux/store';
import {
  CommonType,
  GetLocationsParam,
  LocationType,
  ReduxJson,
} from '@/types';

export enum ResponseStatus {
  PENDING = 'pending',
  FAILED = 'failed',
  SUCCESS = 'success',
}

// Initial state
const initialState: ReduxJson.LocationState = {
  loading: true,
  status: null,
  message: '',
  pageInfo: null,
  error: null,
};

export const getLocations = createAsyncThunk<
  CommonType.Pagination<LocationType>,
  GetLocationsParam,
  { dispatch: AppDispatch; state: RootState }
>('user/getLocations', async (params: GetLocationsParam, thunkAPI) => {
  try {
    return await locationApi.getLocations(params);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

export const getLocationById = createAsyncThunk<
  LocationType,
  number,
  { dispatch: AppDispatch; state: RootState }
>('user/getLocationById', async (locationId: number, thunkAPI) => {
  try {
    return await locationApi.getLocationById(locationId);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    clearLocationMessage: (
      state: ReduxJson.LocationState,
      { payload }: PayloadAction<string>
    ) => {
      state.error = payload;
      state.message = payload;
    },
  },
});

export const { clearLocationMessage } = locationSlice.actions;

export default locationSlice.reducer;
