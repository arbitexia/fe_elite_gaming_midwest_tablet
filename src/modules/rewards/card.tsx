import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { RewardType } from '@/types';
import { RewardsCardProgress } from './cardProgress';
import { RewardsCardPoint } from './cardPoint';
import {
  StyledRewardsCardPoint,
  StyledRewardsCard,
  StyledCardExchangeOfferButton,
  StyledRewardsCardCoupon,
} from './ui';
import { Redeem } from '@mui/icons-material';
import { UIFlexWrapBox } from '@/components/UI';
import { useSelectedLanguage, useTranslation } from 'next-export-i18n';

export type RewardsCardProps = {
  userPoint: number;
  item: RewardType.Data;
};

export const RewardsCard = ({ userPoint, item }: RewardsCardProps) => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  return (
    <StyledRewardsCard>
      <Box
        component="img"
        sx={{
          width: '220px',
          height: '235px',
          objectFit: 'cover',
        }}
        src={
          item?.product?.gallery?.[0]?.asset?.url
            ? `${item?.product?.gallery?.[0]?.asset?.url}`
            : '/images/noImage.jpg'
        }
        alt="image"
      />
      <RewardsCardProgress myPoint={userPoint} itemPoint={item?.point ?? 0} />
      <RewardsCardPoint itemPoint={item?.point} />
      <StyledRewardsCardPoint>
        {t('reward.point-completion')}:{' '}
        <span>
          {userPoint}/{item?.point}
        </span>
      </StyledRewardsCardPoint>
      {item?.coupon && (
        <UIFlexWrapBox sx={{ alignItems: 'center', mt: '12px' }}>
          <Redeem
            style={{ fontSize: '16px', color: 'rgba(137, 200, 198, 0.8)' }}
          />
          <StyledRewardsCardCoupon>
            {item?.coupon} {t('reward.coupons')}
          </StyledRewardsCardCoupon>
        </UIFlexWrapBox>
      )}
      <StyledCardExchangeOfferButton
        onClick={() => {
          router.push({
            pathname: `/rewards/${item.id}`,
            query: {
              ...(lang === 'es' && { lang }),
            },
          });
        }}
      >
        {t('reward.exchange-offer')}
      </StyledCardExchangeOfferButton>
    </StyledRewardsCard>
  );
};
