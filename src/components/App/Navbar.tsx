import { useAuth } from '@/hooks';
import { UIFlexSpaceBox, UIFlexWrapBox, UIImage } from '../UI';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { formatPhoneNumber } from '@/libs/data-helper';
import { UserType, i18translateType } from '@/types';
import { useTranslation } from 'next-i18next';

const AppNavbar = () => {
  const { t }: i18translateType = useTranslation('common');
  const router = useRouter();
  const { me } = useAuth({});
  const isPointPage = router.pathname === '/points';
  return (
    <UIFlexSpaceBox
      px="30px"
      sx={{
        height: '86px',
        width: '100%',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '2px solid rgba(137, 200, 198, 0.05)',
        borderRadius: '0px 0px 20px 20px',
        alignItems: 'center',
        backdropFilter: 'blur(20px)',
        position: 'fixed',
        zIndex: '10',
      }}
    >
      <Box onClick={() => router.push('/points')} sx={{ cursor: 'pointer' }}>
        <UIImage src={'/images/icons/logo.svg'} width={56} height={54} />
      </Box>
      <UIFlexWrapBox>
        <Box sx={{ display: 'flex' }}>
          <Box
            onClick={() => router.push('/points')}
            sx={{
              marginLeft: '15px',
              display: 'flex',
              cursor: 'pointer',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: '600px',
              lineHeight: '27px',
              gap: '12px',
            }}
          >
            <UIImage
              src={`/images/icons/points${isPointPage ? '' : '-dark'}.svg`}
              width={29}
              height={23}
            />
            <Typography>{t('my-points')}</Typography>
          </Box>
          <Box
            onClick={() => router.push('/rewards')}
            sx={{
              marginLeft: '40px',
              display: 'flex',
              cursor: 'pointer',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: '600px',
              lineHeight: '27px',
              gap: '12px',
            }}
          >
            <UIImage
              src={`/images/icons/rewards${isPointPage ? '-dark' : ''}.svg`}
              width={29}
              height={23}
            />
            <Typography>{t('rewards')}</Typography>
          </Box>
          <Typography
            sx={{
              marginLeft: '40px',
              display: 'flex',
              cursor: 'pointer',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: '600px',
              lineHeight: '27px',
              gap: '12px',
            }}
          >
            {formatPhoneNumber((me as UserType.User)?.phone)}
          </Typography>
        </Box>
      </UIFlexWrapBox>
    </UIFlexSpaceBox>
  );
};

export default AppNavbar;
