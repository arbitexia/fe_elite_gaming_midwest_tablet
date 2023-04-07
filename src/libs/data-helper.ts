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

export const formatPhoneNumber = (str: string) => {
  const cleaned = ('' + str).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
};

export const phoneNumberToString = (str: string) => {
  return ('' + str).replace(/\D/g, '');
};
