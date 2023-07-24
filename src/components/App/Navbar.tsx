import { useAuth } from '@/hooks';
import { UIFlexSpaceBox, UIFlexWrapBox } from '../UI';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { formatCurrency, formatPhoneNumber } from '@/libs/data-helper';
import { UserType } from '@/types';
import { useTranslation, useSelectedLanguage } from 'next-export-i18n';
const AppNavbar = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const { me } = useAuth({});

  const isPointPage = router.pathname === '/points';

  const currentUserCoupon = me?.userCoupons
    ?.filter((c) => c.status === 1)
    ?.map((obj) => obj.amount)
    ?.reduce((a, b) => a + b, 0);

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
      <Box
        onClick={() => {
          router.push({
            pathname: '/points',
            query: {
              ...(lang === 'es' && { lang }),
            },
          });
        }}
        sx={{ cursor: 'pointer' }}
      >
        <img src={'/images/icons/logo.svg'} width={56} height={54} alt="logo" />
        {/* <UIImage src={'/images/icons/logo.svg'} width={56} height={54} /> */}
      </Box>
      <UIFlexWrapBox>
        <Box sx={{ display: 'flex' }}>
          <Box
            onClick={() =>
              router.push({
                pathname: '/points',
                query: {
                  ...(lang === 'es' && { lang }),
                },
              })
            }
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
            <img
              src={`/images/icons/points${isPointPage ? '' : '-dark'}.svg`}
              width={29}
              height={23}
              alt="points"
            />
            {/* <UIImage
              src={`/images/icons/points${isPointPage ? '' : '-dark'}.svg`}
              width={29}
              height={23}
            /> */}
            <Typography>{t('common.my-points')}</Typography>
          </Box>
          <Box
            onClick={() => {
              router.push({
                pathname: '/rewards',
                query: {
                  ...(lang === 'es' && { lang }),
                },
              });
            }}
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
            <img
              src={`/images/icons/rewards${isPointPage ? '-dark' : ''}.svg`}
              width={29}
              height={23}
              alt="reward"
            />
            {/* <UIImage
              src={`/images/icons/rewards${isPointPage ? '-dark' : ''}.svg`}
              width={29}
              height={23}
            /> */}
            <Typography>{t('common.rewards')}</Typography>
          </Box>
          <Box
            sx={{
              marginLeft: '40px',
              display: 'flex',
              alignItems: 'center',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: '600px',
              lineHeight: '27px',
              gap: '12px',
            }}
          >
            <img
              src={`/images/icons/coin.png`}
              width={29}
              height={29}
              alt="coupon"
            />
            {/* <UIImage src={`/images/icons/coin.png`} width={29} height={29} /> */}
            {/* <Typography>{t('common.request-coupon')}</Typography> */}
            <Typography>{formatCurrency(currentUserCoupon ?? 0)}</Typography>
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
