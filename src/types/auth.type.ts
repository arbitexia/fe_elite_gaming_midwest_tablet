import { UserType } from './user.type';
import { RoleType } from './role.type';
import { LocationType } from './location.type';

export type TabletAuthParams = {
  identifier: string;
  password: string;
};

export type CustomerAuthParams = {
  identifier: string;
  locationId: number;
};

export type RegisterParams = {
  phone: string;
  email: string;
  birthday: string;
  locationId?: number;
};

export type VerifyPhoneParams = {
  token: string;
  locationId: number;
};

export type TabletAuthType = {
  accessToken: string;
  refreshToken: string;
  location: LocationType;
};

export type CustomerAuthType = {
  message: string;
  user: UserType.User;
  role: RoleType.Role;
  accessToken: string;
  refreshToken: string;
};

export type VerifyPhoneType = {
  user: UserType.User;
  role: RoleType.Role;
  accessToken: string;
  refreshToken: string;
};

export type RegisterType = {
  message: string;
};

export type RefreshTokenPrams = {
  refreshToken: string;
};
