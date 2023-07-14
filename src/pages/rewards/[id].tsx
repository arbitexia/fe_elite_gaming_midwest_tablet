import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DashboardLayout } from '@/layouts';
import {
  UIContainer,
  UIDefaultButton,
  UIDialog,
  UIFlexColumnBox,
  UIFlexWrapBox,
} from '@/components/UI';
import { RewardsHeader, RewardsPointsBox } from '@/modules/rewards';
import { RewardType, TransactionType, UserType } from '@/types';
import { Divider, Box, Typography } from '@mui/material';
import { RewardsInfoBox } from '@/modules/rewards/rewardsInfo';
import { useReward, usePoint, useTransaction, useAuth } from '@/hooks';
import { TransactionStatus } from '@/types/transaction.type';
import { useAppToast } from '@/providers';
import { useSelectedLanguage, useTranslation } from 'next-export-i18n';

const RewardsById = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const appToast = useAppToast();
  const { me } = useAuth({});
  const { rewards } = useReward();
  const { points } = usePoint();
  const { onCreateTransaction } = useTransaction();

  const { id } = router.query;

  const [rewardItem, setRewardItem] = useState<RewardType.Data>();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setRewardItem(rewards.find((item) => item.id === parseInt(id as string)));
  }, [id]);

  const handleExchangeOffer = async () => {
    const filteredUserPoints = points.find(
      (p) => p?.userLocation?.locationId === rewardItem?.locationId
    );
    const rewardPoint = rewardItem?.point ?? 0;
    const rewardCoupon = rewardItem?.coupon ?? 0;
    const userPoint = filteredUserPoints?.point ?? 0;
    const userCoupon = (me as UserType.User)?.coupon ?? 0;
    if (userPoint >= rewardPoint) {
      const dataToSave: TransactionType.Body = {
        input: {
          userId: Number((me as UserType.User)?.id) ?? 0,
          rewardId: rewardItem?.id ?? 0,
          locationId: rewardItem?.locationId ?? 0,
          pointId: filteredUserPoints?.id ?? 0,
          status: TransactionStatus.WAITING,
          type: 'POINT',
          amount: rewardPoint,
          balance: Number(userPoint) - Number(rewardPoint),
        },
      };
      await onCreateTransaction(dataToSave);
      appToast({
        severity: 'success',
        message: 'The product has been Requested.',
      });
      router.push({
        pathname: '/rewards',
        query: {
          ...(lang === 'es' && { lang }),
        },
      });
    } else if (userCoupon >= rewardCoupon) {
      const dataToSave: TransactionType.Body = {
        input: {
          userId: Number((me as UserType.User)?.id) ?? 0,
          rewardId: rewardItem?.id ?? 0,
          locationId: rewardItem?.locationId ?? 0,
          pointId: 0,
          status: TransactionStatus.WAITING,
          type: 'COUPON',
          amount: rewardCoupon,
          balance: Number(userPoint) - Number(rewardCoupon),
        },
      };
      await onCreateTransaction(dataToSave);
      appToast({
        severity: 'success',
        message: 'The product has been Requested.',
      });
      router.push({
        pathname: '/rewards',
        query: {
          ...(lang === 'es' && { lang }),
        },
      });
    } else {
      setOpenModal(true);
    }
  };
  return (
    <DashboardLayout title={t('common:rewards')}>
      <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
        <RewardsHeader />
        <Divider
          sx={{
            mt: '26px',
            borderColor: 'rgba(137, 200, 198, 0.5)',
          }}
        />
        <RewardsPointsBox />
        {rewardItem && (
          <UIFlexWrapBox
            sx={{
              mt: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(137, 200, 198, 0.2)',
              backdropFilter: 'blur(20px)',
              borderRadius: '30px',
              padding: '25px 30px',
              gap: '90px',
            }}
          >
            <Box
              component="img"
              sx={{
                width: '477px',
                height: '510px',
                objectFit: 'cover',
              }}
              src={
                rewardItem.product?.gallery?.[0]?.asset?.url
                  ? `${rewardItem.product?.gallery?.[0]?.asset?.url}`
                  : '/images/noImage.jpg'
              }
              alt="image"
            />
            <Box mt="35px">
              <RewardsInfoBox
                rewardItem={rewardItem}
                userPoint={
                  points.find(
                    (p) => p?.userLocation?.locationId === rewardItem.locationId
                  )?.point ?? 0
                }
                onExchange={handleExchangeOffer}
              />
            </Box>
          </UIFlexWrapBox>
        )}
      </UIContainer>

      <UIDialog open={openModal}>
        <UIFlexColumnBox width="100%">
          <Typography
            sx={{
              width: '345px',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '160%',
              textAlign: 'center',
              color: '#6F918A',
              py: '30px',
            }}
          >
            {t('reward.alert-desc-exchange-offer')}
          </Typography>
          <UIDefaultButton
            type="button"
            sx={{ height: '54px' }}
            onClick={() => setOpenModal(false)}
          >
            {t('common.close')}
          </UIDefaultButton>
        </UIFlexColumnBox>
      </UIDialog>
    </DashboardLayout>
  );
};

export default RewardsById;
