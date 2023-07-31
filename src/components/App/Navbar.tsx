import { useState, useEffect } from 'react';
import { useAuth, useTransaction } from '@/hooks';
import {
  UIDialog,
  UIFlexColumnBox,
  UIFlexSpaceBox,
  UIFlexWrapBox,
} from '../UI';

import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { formatCurrency, formatPhoneNumber } from '@/libs/data-helper';
import { TransactionType, UserType } from '@/types';
import { useTranslation, useSelectedLanguage } from 'next-export-i18n';
import { Close } from '@mui/icons-material';
import { TransactionStatus, UserCouponStatus } from '@/constants';
import { useAppToast } from '@/providers';
import moment from 'moment';

const AppNavbar = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const { me, onGetUserById } = useAuth({});
  const appToast = useAppToast();
  const { onRequestCouponTransaction } = useTransaction();
  const isPointPage = router.pathname === '/points';
  const [openModal, setOpenModal] = useState(false);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (me?.id && isChanged) {
      onGetUserById(Number(me.id));
      setIsChanged(false);
    }
  }, [isChanged]);

  const handleRequestCoupon = async (
    userCouponId: number,
    coupon: number,
    metadata: any
  ) => {
    if (coupon > 0) {
      const dataToSave: TransactionType.CouponBody = {
        input: {
          userCouponId,
          userId: Number((me as UserType.User)?.id) ?? 0,
          status: TransactionStatus.WAITING,
          type: 'COUPON',
          amount: coupon,
          metadata: { ...metadata, userCouponId },
        },
      };
      await onRequestCouponTransaction(dataToSave);
      setIsChanged(true);
      resetCoupon();
    } else {
      appToast({ severity: 'error', message: t('common.invalid-coupon') });
    }
  };

  const resetCoupon = () => {
    setOpenModal(false);
  };

  const currentUserCoupon = me?.userCoupons
    ?.filter(
      (c) =>
        (c.status === UserCouponStatus.REQUEST &&
          moment(c.expirationDate).diff(moment(), 'days') > 0) ||
        c.status === UserCouponStatus.REQUESTED
    )
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
              cursor: 'pointer',
            }}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img
              src={`/images/icons/coin.png`}
              width={29}
              height={29}
              alt="coupon"
            />
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
            {me && formatPhoneNumber(me.phone)}
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
              color: '#ddd',
              '&:hover': { background: 'transparent' },
            }}
            onClick={resetCoupon}
          >
            <Close sx={{ width: 32, height: 32 }} />
          </Button>
          <UIFlexWrapBox>
            {me?.userCoupons
              ?.filter(
                (c) =>
                  (c.status === UserCouponStatus.REQUEST &&
                    moment(c.expirationDate).diff(moment(), 'days') > 0) ||
                  c.status === UserCouponStatus.REQUESTED
              )
              ?.map((obj) => {
                return (
                  <UIFlexColumnBox
                    key={`userCoupon-${obj.id}`}
                    sx={{
                      border: 'solid 3px #013430',
                      borderRadius: '6px',
                      padding: '8px',
                      gap: '2px',
                      cursor:
                        obj.status === UserCouponStatus.REQUEST
                          ? 'pointer'
                          : 'initial',
                      transitionDuration: '0.1s',
                      '&:hover': {
                        transform:
                          obj.status === UserCouponStatus.REQUEST
                            ? 'scale(1.02)'
                            : 'none',
                      },
                      opacity:
                        obj.status === UserCouponStatus.REQUEST ? 1 : 0.5,
                    }}
                    onClick={() => {
                      if (obj.status == UserCouponStatus.REQUEST) {
                        handleRequestCoupon(obj.id, obj.amount, obj.metadata);
                      }
                    }}
                  >
                    <img
                      src={`/images/icons/coin.png`}
                      width={40}
                      height={40}
                      alt="coupon"
                    />
                    <Typography
                      sx={{
                        color: '#FFE600',
                        fontWeight: 700,
                        fontSize: '24px',
                      }}
                    >
                      {formatCurrency(obj.amount)}
                    </Typography>
                    <UIFlexSpaceBox>
                      <Typography sx={{ color: '#FFF', fontSize: '12px' }}>
                        Expiry:
                      </Typography>
                      <Typography sx={{ color: '#FFF', fontSize: '12px' }}>
                        {moment(obj.expirationDate).format('MM/DD/YYYY')}
                      </Typography>
                    </UIFlexSpaceBox>
                    <UIFlexWrapBox sx={{ width: '100%' }}>
                      <Typography sx={{ color: '#FFF', fontSize: '12px' }}>
                        Status:
                      </Typography>
                      <Typography sx={{ color: '#FFF', fontSize: '12px' }}>
                        {obj.status === UserCouponStatus.REQUEST
                          ? 'Request'
                          : 'Requested'}
                      </Typography>
                    </UIFlexWrapBox>
                  </UIFlexColumnBox>
                );
              })}
          </UIFlexWrapBox>
        </UIFlexColumnBox>
      </UIDialog>
    </UIFlexSpaceBox>
  );
};

export default AppNavbar;
