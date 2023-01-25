import { GetLocationsParam } from '@/types';
import { jwtAxios } from './axios.api';
import { getAuthorizeHeader } from '@/libs/data-helper';

export const getLocations = async (params: GetLocationsParam) => {
  const response = await jwtAxios.get(`/api/locations`, {
    headers: getAuthorizeHeader(),
    params,
  });
  return response.data;
};

export const getLocationById = async (locationId: number) => {
  const response = await jwtAxios.get(`/api/location/${locationId}`, {
    headers: getAuthorizeHeader(),
  });
  return response.data;
};
