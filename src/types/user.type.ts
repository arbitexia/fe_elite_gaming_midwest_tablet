import { CommonType } from './common.type';
import { AssetType } from './asset.type';
import { RoleType } from './role.type';

export declare namespace UserType {
  enum Status {
    ACTIVATED = 'ACTIVATED',
    DISABLED = 'DISABLED',
    ARCHIVED = 'ARCHIVED',
    VERIFY_PHONE = 'VERIFY_PHONE',
    VERIFY_EMAIL = 'VERIFY_EMAIL',
  }

  type User = {
    id: string;
    firstName?: string;
    lastName?: string;
    userName?: string;
    avatar?: AssetType.Asset;
    email?: string;
    phone: string;
    address?: CommonType.Address;
    birthday: string;
    status: Status;
    coupon?: number;
    role: RoleType.Role;
    createdAt?: string;
    updatedAt?: string;
  };
}
