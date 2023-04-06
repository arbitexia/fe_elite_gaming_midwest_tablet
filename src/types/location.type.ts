import { CommonType } from './common.type';

export type LocationType = {
  id: number;
  name: string;
  coords: { lat: number; lng: number };
  address: CommonType.Address;
  status: string;
  type: string;
  description?: string;
  updatedAt?: string;
  createdAt?: string;
};

export type GetLocationsParam = {
  filterBy: {
    search: string;
  };
  cursor?: {
    page: number;
    size: number;
  };
};

export type GetLocationParam = {
  locationId: number;
};
