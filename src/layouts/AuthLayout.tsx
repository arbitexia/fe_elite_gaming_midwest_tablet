import React, { useEffect } from 'react';
import { AppSEO, AppLanguageSelector } from '@/components/App';
import {
  UIAppLayoutWrapper,
  UIFlexCenterBox,
  UIFlexColumnBox,
  UIImage,
  UIAuthContent,
  UIAuthLogoContent,
  UIAuthMainContent,
} from '@/components/UI';
import { Box, Typography } from '@mui/material';

import { useAppLockScreen } from '@/providers';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks';
import { useTranslation } from 'next-i18next';
import { i18translateType } from '@/types';
interface Props {
  bg?: string;
  title?: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
}

const AuthLayout = (props: Props) => {
  const { t }: i18translateType = useTranslation();
  const { isTabletAuthenticated } = useAuth({});
  const router = useRouter();
  const appLockScreen = useAppLockScreen();
  useEffect(() => {
    if (!isTabletAuthenticated) appLockScreen();
  }, [isTabletAuthenticated, router]);

  return (
    <UIAppLayoutWrapper sx={{ background: props.bg }}>
      <AppSEO title={props.title || ''} description={props.description || ''} />
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          background: 'url("/images/back.png")',
        }}
      >
        <video
          autoPlay
          loop
          muted
          id="video"
          style={{
            position: 'fixed',
            right: 0,
            bottom: 0,
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        >
          {/* <source src="/images/bg.mp4" type="video/mp4"></source> */}
        </video>
        <UIFlexCenterBox sx={{ height: '100%' }}>
          <UIAuthContent>
            <UIAuthLogoContent>
              <AppLanguageSelector />
              <UIFlexColumnBox>
                <UIImage
                  src={'images/icons/logo.svg'}
                  width={290}
                  height={277}
                />
                <Typography
                  sx={{
                    width: '345px',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '160%',
                    textAlign: 'center',
                    color: '#6F918A',
                    paddingTop: '50px',
                  }}
                >
                  {t('desc-checkin')}
                </Typography>
              </UIFlexColumnBox>
            </UIAuthLogoContent>
            <UIAuthMainContent>
              <Box height="580px">{props.children}</Box>
            </UIAuthMainContent>
          </UIAuthContent>
        </UIFlexCenterBox>
      </Box>
    </UIAppLayoutWrapper>
  );
};

export default AuthLayout;
