export type LocationType = {
  id: number;
  location: string;
  point: number;
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
