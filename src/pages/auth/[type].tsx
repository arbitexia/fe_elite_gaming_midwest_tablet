import { Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import {
  UIContainer,
  UIFlexCenterBox,
  UIFlexColumnBox,
  UIFlexWrapBox,
  UIImage,
} from '@/components/UI';
import { CheckIn, SignUp, Verify, LanguageSelector } from '@/modules/auth';

const AuthPage: NextPage = () => {
  const router = useRouter();
  const { type: pageType } = router.query;
  // const handleLogin = () => {
  //   router.push('/login');
  // };

  return (
    <UIContainer
      sx={{
        height: '100vh',
        background:
          'linear-gradient(0deg, rgba(6, 27, 47, 0.25), rgba(6, 27, 47, 0.25)), url("../images/back.png")',
      }}
    >
      <UIFlexCenterBox sx={{ height: '100%' }}>
        <Paper
          elevation={0}
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            minWidth: '1160px',
            minHeight: '770px',
            borderRadius: '30px',
            border: 'solid 2px rgba(137, 200, 198, 0.05)',
          }}
        >
          <UIFlexWrapBox sx={{ height: '770px' }}>
            <UIFlexColumnBox
              width="49%"
              sx={{ position: 'relative', height: '100%' }}
            >
              <LanguageSelector />
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
            </UIFlexColumnBox>
            <UIFlexWrapBox sx={{ width: '410px', gap: 0 }}>
              {pageType === 'checkin' && <CheckIn />}
              {pageType === 'signup' && <SignUp />}
              {pageType === 'verify' && <Verify />}
            </UIFlexWrapBox>
          </UIFlexWrapBox>
        </Paper>
      </UIFlexCenterBox>
    </UIContainer>
  );
};

export default AuthPage;
