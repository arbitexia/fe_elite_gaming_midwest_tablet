import { jwtAxios } from './axios.api';
import { getAuthorizeHeader } from '@/libs/data-helper';
import { RewardType } from '@/types';

export const filter = async (filter: RewardType.Filter) => {
  const res = await jwtAxios.get('/reward/items', {
    params: filter,
    headers: getAuthorizeHeader(),
  });
  return res.data;
};

export const getByUserId = async (param: { userId: number }) => {
  const res = await jwtAxios.get(`/rewards/user/${param.userId}`, {
    headers: getAuthorizeHeader(),
  });
  return res.data;
};
