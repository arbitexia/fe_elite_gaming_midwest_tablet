import { UserType } from './user.type';
import { RoleType } from './role.type';
import { LocationType } from './location.type';

export type TabletAuthParams = {
  identifier: string;
  password: string;
};

export type CustomerAuthParams = {
  identifier: string;
};

export type RegisterParams = {
  phone: string;
  email: string;
  birthday: string;
};

export type VerifyPhoneParams = {
  token: string;
};

export type TabletAuthType = {
  accessToken: string;
  refreshToken: string;
  location: LocationType;
};

export type CustomerAuthType = {
  message: string;
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
