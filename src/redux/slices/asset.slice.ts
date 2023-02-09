import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import { AssetType, ReduxJson, ResponseStatus, LocationType } from '@/types';
import { getLocation } from './location.slice';

// Initial state
const initialState: ReduxJson.AssetState = {
  loading: true,
  status: null,
  message: '',
  error: null,
  galleries: [],
};

// Actual Slice
export const assetSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    clearAssetMessage: (
      state: ReduxJson.AssetState,
      _payload: PayloadAction<string>
    ) => {
      state.error = null;
      state.message = null;
    },
    setGalleries: (
      state: ReduxJson.AssetState,
      { payload }: PayloadAction<AssetType.Gallery[]>
    ) => {
      state.galleries = payload;
    },
    removeGalleryItem: (
      state: ReduxJson.AssetState,
      { payload }: PayloadAction<number>
    ) => {
      state.galleries = state.galleries.splice(payload, 1);
    },
    addGalleryItem: (
      state: ReduxJson.AssetState,
      { payload }: PayloadAction<AssetType.Gallery>
    ) => {
      state.galleries = [...state.galleries, payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLocation.pending, (state) => {
        state.loading = true;
        state.status = ResponseStatus.PENDING;
        state.error = null;
        state.message = null;
      })
      .addCase(
        getLocation.fulfilled,
        (state, { payload }: PayloadAction<LocationType>) => {
          state.loading = false;
          state.galleries = payload.gallery ?? [];
          state.status = ResponseStatus.SUCCESS;
          state.message = 'Asset Created';
        }
      )
      .addCase(getLocation.rejected, (state, { payload }) => {
        state.loading = false;
        state.status = ResponseStatus.FAILED;
        state.error = payload as string;
        state.message = null;
      });
  },
});

export const {
  clearAssetMessage,
  setGalleries,
  removeGalleryItem,
  addGalleryItem,
} = assetSlice.actions;

export const assetSelector = (state: RootState) => state.asset;

export default assetSlice.reducer;
