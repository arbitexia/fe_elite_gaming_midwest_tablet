import { useState } from 'react';
import { useAuth, useTransaction } from '@/hooks';
import {
  UIDefaultButton,
  UIDefaultTextField,
  UIDialog,
  UIFlexColumnBox,
  UIFlexSpaceBox,
  UIFlexWrapBox,
  UIImage,
} from '../UI';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { formatPhoneNumber } from '@/libs/data-helper';
import { TransactionType, UserType } from '@/types';
import { useTranslation, useSelectedLanguage } from 'next-export-i18n';
import { Close } from '@mui/icons-material';
import { TransactionStatus } from '@/constants';
import { useAppToast } from '@/providers';

const AppNavbar = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const { me } = useAuth({});
  const appToast = useAppToast();
  const { onRequestCouponTransaction } = useTransaction();

  const isPointPage = router.pathname === '/points';

  const [openModal, setOpenModal] = useState(false);
  const [coupon, setCoupon] = useState<number>();

  const handleRequestCoupon = async () => {
    if (coupon && coupon > 0) {
      const dataToSave: TransactionType.CouponBody = {
        input: {
          userId: Number((me as UserType.User)?.id) ?? 0,
          status: TransactionStatus.WAITING,
          type: 'COUPON',
          amount: coupon,
        },
      };
      await onRequestCouponTransaction(dataToSave);
      resetCoupon();
    } else {
      appToast({ severity: 'error', message: t('common.invalid-coupon') });
    }
  };

  const resetCoupon = () => {
    setOpenModal(false);
    setCoupon(undefined);
  };
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
        <UIImage src={'/images/icons/logo.svg'} width={56} height={54} />
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
            <UIImage
              src={`/images/icons/points${isPointPage ? '' : '-dark'}.svg`}
              width={29}
              height={23}
            />
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
            <UIImage
              src={`/images/icons/rewards${isPointPage ? '-dark' : ''}.svg`}
              width={29}
              height={23}
            />
            <Typography>{t('common.rewards')}</Typography>
          </Box>
          <Box
            onClick={() => {
              setOpenModal(true);
            }}
            sx={{
              marginLeft: '40px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              color: '#FFFFFF',
              fontSize: '18px',
              fontWeight: '600px',
              lineHeight: '27px',
              gap: '12px',
            }}
          >
            <UIImage src={`/images/icons/coin.png`} width={29} height={29} />
            <Typography>{t('common.request-coupon')}</Typography>
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

      <UIDialog open={openModal}>
        <UIFlexColumnBox sx={{ gap: 4 }}>
          <Button
            disableFocusRipple
            disableRipple
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: '#001c1a',
              '&:hover': { background: 'transparent' },
            }}
            onClick={resetCoupon}
          >
            <Close sx={{ width: 32, height: 32 }} />
          </Button>
          <UIDefaultTextField
            placeholder={t('reward.coupons')}
            name="requestCoupon"
            type="number"
            value={coupon ?? ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCoupon(Number(e.target.value));
            }}
            onBlur={(e) => {
              setCoupon(Number(e.target.value));
            }}
          />
          <UIDefaultButton
            type="button"
            onClick={handleRequestCoupon}
            sx={{ height: '60px' }}
          >
            {t('common.request')}
          </UIDefaultButton>
        </UIFlexColumnBox>
      </UIDialog>
    </UIFlexSpaceBox>
  );
};

export default AppNavbar;
