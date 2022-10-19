import { Paper, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import {
  UIFlexCenterBox,
  UIFlexColumnBox,
  UIFlexWrapBox,
  UIImage,
} from '@/components/UI';
import { CheckIn, SignUp, LanguageSelector } from '@/modules/auth';

const HomePage: NextPage = () => {
  const router = useRouter();
  const { path: pageType } = router.query;
  // const handleLogin = () => {
  //   router.push('/login');
  // };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        background:
          'linear-gradient(0deg, rgba(6, 27, 47, 0.25), rgba(6, 27, 47, 0.25)), url("../images/back.png")',
        backgroundSize: 'contain',
      }}
    >
      <UIFlexCenterBox sx={{ height: '100%' }}>
        <Paper
          elevation={0}
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            maxWidth: '1160px',
            minWidth: '950px',
            minHeight: '700px',
            maxHeight: '770px',
            borderRadius: '30px',
            border: 'solid 2px rgba(137, 200, 198, 0.05)',
            width: '80%',
            height: '80%',
          }}
        >
          <UIFlexWrapBox sx={{ height: '100%' }}>
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
            <UIFlexWrapBox
              sx={{
                width: '410px',
                height: '100%',
                alignItems: 'center',
                gap: 0,
              }}
            >
              <Box sx={{ height: '580px' }}>
                {pageType === 'signup' ? <SignUp /> : <CheckIn />}
              </Box>
            </UIFlexWrapBox>
          </UIFlexWrapBox>
        </Paper>
      </UIFlexCenterBox>
    </Box>
  );
};

export default HomePage;
