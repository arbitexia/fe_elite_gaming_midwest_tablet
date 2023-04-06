import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { rewardApi } from '@/redux/apis';
import { RootState, AppDispatch } from '@/redux/store';
import { ReduxJson, RewardType, ResponseStatus } from '@/types';

const initialState: ReduxJson.RewardState = {
  loading: true,
  status: null,
  message: null,
  error: null,
  rewards: [],
  availableRewards: [],
  pageInfo: null,
};

export const filterRewards = createAsyncThunk<
  RewardType.Data[],
  RewardType.Filter,
  { dispatch: AppDispatch; state: RootState }
>('rewards/filterRewards', async (filter: RewardType.Filter, thunkAPI) => {
  try {
    return await rewardApi.filter(filter);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

export const getRewardsByUserId = createAsyncThunk<
  RewardType.Data[],
  { userId: number },
  { dispatch: AppDispatch; state: RootState }
>('rewards/getRewardsByUserId', async (param: { userId: number }, thunkAPI) => {
  try {
    return await rewardApi.getByUserId(param);
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.response?.data);
  }
});

export const rewardSlice = createSlice({
  name: 'reward',
  initialState,
  reducers: {
    resetRewardMessage: (state: ReduxJson.RewardState, _payload) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterRewards.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.error = null;
        state.message = null;
      })
      .addCase(filterRewards.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.error = payload as string;
        state.message = null;
      })
      .addCase(
        filterRewards.fulfilled,
        (state, { payload }: PayloadAction<RewardType.Data[]>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.rewards = payload;
        }
      )
      .addCase(getRewardsByUserId.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.error = null;
        state.message = null;
      })
      .addCase(getRewardsByUserId.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.error = payload as string;
        state.message = null;
      })
      .addCase(
        getRewardsByUserId.fulfilled,
        (state, { payload }: PayloadAction<RewardType.Data[]>) => {
          state.loading = false;
          state.status = ResponseStatus.SUCCESS;
          state.availableRewards = payload;
        }
      );
  },
});

export const { resetRewardMessage } = rewardSlice.actions;

export const rewardSelector = (state: RootState) => state.reward;
export default rewardSlice.reducer;
