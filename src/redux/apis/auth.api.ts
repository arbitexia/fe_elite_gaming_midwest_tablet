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
} from '@/types';
import axios from 'axios';
import config from '@/config';

const baseUrl: string = config.API_URL || '';

const headers = {
  'Access-Control-Allow-Origin': config.API_URL || '',
  'Access-Control-Allow-Methods': 'GET,POST',
};

const authHeader = {
  'Access-Control-Allow-Origin': config.API_URL || '',
  'Access-Control-Allow-Methods': 'GET,POST',
  Authorization: localStorage.getItem('accessToken'),
};

export const authorizeTablet = async (params: TabletAuthParams) => {
  const response = await axios.post(`${baseUrl}/api/authorizeTablet`, params, {
    headers,
  });
  return response.data;
};

export const authorizeCustomer = async (params: CustomerAuthParams) => {
  const response = await axios.post(
    `${baseUrl}/api/authorizeCustomer`,
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
  const response = await axios.post(`${baseUrl}/api/verifyPhone`, params, {
    headers: authHeader,
  });
  return response.data;
};
