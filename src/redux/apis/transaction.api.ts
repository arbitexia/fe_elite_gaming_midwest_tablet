import { jwtAxios } from './axios.api';
import { getAuthorizeHeader } from '@/libs/data-helper';
import { TransactionType } from '@/types';

export const createTransaction = async (params: TransactionType.Body) => {
  const response = await jwtAxios.post(`/transaction`, params, {
    headers: getAuthorizeHeader(),
  });
  return response.data;
};
