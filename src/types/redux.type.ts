import { PaletteMode } from '@mui/material';
import { CommonType, ResponseStatus } from './common.type';
import { LocationType } from './location.type';
import { PointType } from './point.type';
import { RewardType } from './rewards.type';
import { UserType } from './user.type';

export declare namespace ReduxJson {
  export type CommonReduxData<T> = {
    loading: boolean;
    data: T | null;
    status: ResponseStatus | null;
  };

  export type AppState = {
    theme: {
      mode: PaletteMode;
      loading: boolean;
    };
  };

  export type AuthState = {
    loading: boolean;
    status: ResponseStatus | null;
    accessToken: string;
    refreshToken: string;
    user: UserType.User | null;
    location: LocationType | null;
    role: object;
    message: string;
    errorMessage: string | null;
  };

  export type LocationState = {
    loading: boolean;
    status: ResponseStatus | null;
    locations: LocationType[];
    pageInfo: CommonType.PageInfo | null;
    message: string | null;
    error: string | null;
  };

  export type PointState = {
    loading: boolean;
    status: ResponseStatus | null;
    points: PointType[];
    message: string | null;
    error: string | null;
  };

  export type RewardState = {
    loading: boolean;
    status: ResponseStatus | null;
    message: string | null;
    error: string | null;
    rewards: RewardType.Data[];
    availableRewards: RewardType.Data[];
    pageInfo: CommonType.PageInfo | null;
  };

  export type TransactionState = {
    loading: boolean;
    status: ResponseStatus | null;
    message: string | null;
    error: string | null;
  };
}
