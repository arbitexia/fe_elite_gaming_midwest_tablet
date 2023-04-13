import { LocationType, ProductType } from '@/types';

export declare namespace RewardType {
  type Data = {
    id?: number;
    locationId?: number;
    productId?: number;
    location?: LocationType;
    product: ProductType.Data;
    point?: number;
    coupon?: number;
    createdAt?: string;
    updatedAt?: string;
  };

  type Param = { id: number };

  type Filter = {
    filterBy: {
      locationId?: number;
      fromPoint?: number;
      toPoint?: number;
    };
  };
}
