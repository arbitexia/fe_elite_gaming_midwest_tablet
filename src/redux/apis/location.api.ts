import { GetLocationsParam } from '@/types';
import { jwtAxios } from './axios.api';
import { getAuthorizeHeader } from '@/libs/data-helper';

export const getLocations = async (params: GetLocationsParam) => {
  const response = await jwtAxios.get(`/locations`, {
    params,
    headers: getAuthorizeHeader(),
  });
  return response.data;
};
