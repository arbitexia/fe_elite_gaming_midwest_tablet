import config from '@/config';

export const getHeader = () => {
  return {
    headers: {
      'Access-Control-Allow-Origin': config.API_URL || '',
      'Access-Control-Allow-Methods': 'GET,POST',
    },
  };
};

export const getAuthorizeHeader = () => {
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
  return authHeader;
};

export const phoneNumberToString = (str: string) => {
  return ('' + str).replace(/\D/g, '');
};
