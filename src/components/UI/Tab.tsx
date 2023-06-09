import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { UIFlexSpaceBox } from './Box';
import { useTranslation } from 'next-i18next';
import { i18translateType } from '@/types';

export type UIAuthTabsProps = {
  isCheckIn: boolean;
};

export const UIAuthTabs = ({ isCheckIn }: UIAuthTabsProps) => {
  const { t }: i18translateType = useTranslation();
  const router = useRouter();
  return (
    <UIFlexSpaceBox
      sx={{
        width: '100%',
        height: '58px',
        background: 'rgba(137, 200, 198, 0.15)',
        border: '1px solid rgba(193, 191, 225, 0.05)',
        borderRadius: '20px',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '205px',
          height: '50px',
          position: 'absolute',
          top: '3px',
          left: '3px',
          transition: 'transform 0.3s',
          transform: `translateX(${isCheckIn ? 0 : 1 * 197}px)`,
          background: '#006F69',
          border: '1px solid rgba(27, 88, 85, 0.43)',
          boxShadow: '0px 5px 22px rgba(107, 107, 107, 0.2)',
          borderRadius: '20px',
          zIndex: 1,
        }}
      />
      <Typography
        sx={{ width: '50%', zIndex: 2, cursor: 'pointer' }}
        onClick={() => {
          router.push('/');
        }}
      >
        {t('checkin')}
      </Typography>
      <Typography
        sx={{ width: '50%', zIndex: 2, cursor: 'pointer' }}
        onClick={() => {
          router.push('/?path=signup');
        }}
      >
        {t('signup')}
      </Typography>
    </UIFlexSpaceBox>
  );
};
