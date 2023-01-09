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

export const authorizeTablet = async (params: TabletAuthParams) => {
  const response = await axios.post(`${baseUrl}/api/authorizeTablet`, params, {
    headers,
  });
  return response.data;
};

export const authorizeCustomer = async (params: CustomerAuthParams) => {
  const response = await axios.post(
    `${baseUrl}/api/tablet/authorizeCustomer`,
    params,
    {
      headers: {
        'Access-Control-Allow-Origin': config.API_URL || '',
        'Access-Control-Allow-Methods': 'GET,POST',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );
  return response.data;
};

export const register = async (params: RegisterParams) => {
  const response = await axios.post(`${baseUrl}/api/tablet/register`, params, {
    headers: {
      'Access-Control-Allow-Origin': config.API_URL || '',
      'Access-Control-Allow-Methods': 'GET,POST',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return response.data;
};

export const verifyPhone = async (params: VerifyPhoneParams) => {
  const response = await axios.post(
    `${baseUrl}/api/tablet/verifyPhone`,
    params,
    {
      headers: {
        'Access-Control-Allow-Origin': config.API_URL || '',
        'Access-Control-Allow-Methods': 'GET,POST',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }
  );
  return response.data;
};
