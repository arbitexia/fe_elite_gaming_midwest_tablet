import { GetLocationParam, GetLocationsParam } from '@/types';
import { jwtAxios } from './axios.api';
import { getAuthorizeHeader } from '@/libs/data-helper';

export const getLocations = async (params: GetLocationsParam) => {
  const response = await jwtAxios.get(`/locations`, {
    headers: getAuthorizeHeader(),
    params,
  });
  return response.data;
};

export const getLocation = async (params: GetLocationParam) => {
  const response = await jwtAxios.get(`/location/${params.locationId}`, {
    headers: getAuthorizeHeader(),
  });
  return response.data;
};
