import { CommonType } from './common.type';

export type LocationType = {
  name: string;
  coordinates: { lat: number; lng: number };
  id: number;
  address: CommonType.Address;
  status: boolean;
  type: string;
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
