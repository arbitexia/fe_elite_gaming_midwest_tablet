import { AssetType } from './asset.type';
import { CommonType } from './common.type';

export type LocationType = {
  name: string;
  coordinates: { lat: number; lng: number };
  id: number;
  address: CommonType.Address;
  status: boolean;
  type: string;
  gallery: AssetType.Gallery[];
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

export type LocationMenuItemType = {
  value: string;
  label: string;
};
