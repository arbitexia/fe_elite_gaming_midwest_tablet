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
import { useAuth } from '@/hooks/auth';
import { useAppLockScreen } from '@/providers';

interface Props {
  bg?: string;
  title?: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
}

const AuthLayout = (props: Props) => {
  const { isTabletAuthenticated } = useAuth();
  const appLockScreen = useAppLockScreen();
  useEffect(() => {
    if (!isTabletAuthenticated) appLockScreen();
  }, [isTabletAuthenticated]);

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
          <source src="/images/bg.mp4" type="video/mp4"></source>
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
                  Maximizing Your Revenue by Providing the Most Detailed
                  Reporting
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
