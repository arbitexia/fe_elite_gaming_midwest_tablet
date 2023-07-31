/**
 * Copyright (c) 2022, Red Vector, Inc.
 * All rights reserved
 */

/**
 * Author: Dan Finkel
 */
import {
  TabletAuthParams,
  CustomerAuthParams,
  RegisterParams,
  VerifyPhoneParams,
  RefreshTokenPrams,
  GetUserParam,
} from '@/types';
import axios from 'axios';
import config from '@/config';
import { getAuthorizeHeader, getHeader } from '@/libs/data-helper';
import { jwtAxios } from './axios.api';

const baseUrl: string = config.API_URL || '';
const headers = getHeader();
const authHeader = getAuthorizeHeader();

export const authorizeTablet = async (params: TabletAuthParams) => {
  const response = await axios.post(
    `${baseUrl}/api/authorize_tablet`,
    params,
    headers
  );
  return response.data;
};

export const authorizeCustomer = async (params: CustomerAuthParams) => {
  const response = await axios.post(
    `${baseUrl}/api/authorize_customer_from_tablet`,
    params,
    {
      headers: authHeader,
    }
  );
  return response.data;
};

export const register = async (params: RegisterParams) => {
  const response = await axios.post(`${baseUrl}/api/register`, params, {
    headers: authHeader,
  });
  return response.data;
};

export const verifyPhone = async (params: VerifyPhoneParams) => {
  const response = await axios.post(`${baseUrl}/api/verify_phone`, params, {
    headers: authHeader,
  });
  return response.data;
};

export const refreshToken = async (params: RefreshTokenPrams) => {
  const response = await axios.post(`${baseUrl}/api/refresh`, params, headers);
  return response.data;
};

export const getUser = async (params: GetUserParam) => {
  const response = await jwtAxios.get(`/users/${params.userId}`, {
    headers: getAuthorizeHeader(),
  });
  return response.data;
};
