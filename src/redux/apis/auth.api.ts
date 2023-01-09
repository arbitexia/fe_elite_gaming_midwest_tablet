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

let authHeader = {
  'Access-Control-Allow-Origin': config.API_URL || '',
  'Access-Control-Allow-Methods': 'GET,POST',
  Authorization: 'Bearer ',
};

if (typeof window !== 'undefined') {
  // Perform localStorage action
  authHeader = {
    'Access-Control-Allow-Origin': config.API_URL || '',
    'Access-Control-Allow-Methods': 'GET,POST',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
}

export const authorizeTablet = async (params: TabletAuthParams) => {
  const response = await axios.post(`${baseUrl}/api/authorizeTablet`, params, {
    headers,
  });
  return response.data;
};

export const authorizeCustomer = async (params: CustomerAuthParams) => {
  const response = await axios.post(
    `${baseUrl}/tablet/authorizeCustomer`,
    params,
    {
      headers: authHeader,
    }
  );
  return response.data;
};

export const register = async (params: RegisterParams) => {
  const response = await axios.post(`${baseUrl}/tablet/register`, params, {
    headers: authHeader,
  });
  return response.data;
};

export const verifyPhone = async (params: VerifyPhoneParams) => {
  const response = await axios.post(`${baseUrl}/tablet/verifyPhone`, params, {
    headers: authHeader,
  });
  return response.data;
};
