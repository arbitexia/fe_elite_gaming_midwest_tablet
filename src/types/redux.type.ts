import { PaletteMode } from '@mui/material';
import { CommonType, ResponseStatus } from './common.type';

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
    user: object | null;
    role: object;
    message: string;
    errorMessage: string | null;
  };

  export type LocationState = {
    loading: boolean;
    status: ResponseStatus | null;
    pageInfo: CommonType.PageInfo | null;
    message: string | null;
    error: string | null;
  };
}
