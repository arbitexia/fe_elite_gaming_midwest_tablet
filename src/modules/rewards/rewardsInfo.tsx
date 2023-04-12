import { RewardsCardProgress } from './cardProgress';
import { RewardsCardPoint } from './cardPoint';
import { RewardType } from '@/types';
import {
  StyledRewardsName,
  StyledRewardsLocation,
  StyledRewardsCardPoint,
  StyledRewardsSpecKey,
  StyledDetailExchangeOfferButton,
} from './ui';
import { UIFlexWrapBox } from '@/components/UI';
import { Typography } from '@mui/material';
import { Redeem } from '@mui/icons-material';

export type RewardsInfoBoxProps = {
  userPoint: number;
  rewardItem: RewardType.Data;
  onExchange: () => void;
};

export const RewardsInfoBox = ({
  userPoint,
  rewardItem,
  onExchange,
}: RewardsInfoBoxProps) => {
  const { product, location } = rewardItem;
  return (
    <>
      <StyledRewardsName>{product?.name}</StyledRewardsName>
      <StyledRewardsLocation>
        {`${location?.address?.address1 ?? ''} ${
          location?.address?.address2 ?? ''
        } ${location?.address?.city ?? ''} ${location?.address?.state ?? ''} ${
          location?.address?.zipcode ?? ''
        } ${location?.address?.country ?? ''}`}
      </StyledRewardsLocation>
      <UIFlexWrapBox sx={{ mt: '29px', gap: 4, alignItems: 'center' }}>
        <RewardsCardPoint itemPoint={rewardItem?.point} />
        {rewardItem?.coupon && (
          <UIFlexWrapBox
            sx={{
              alignItems: 'center',
              mt: '12px',
              color: 'rgba(137, 200, 198, 0.8)',
            }}
          >
            <Redeem style={{ fontSize: '20px' }} />
            <Typography sx={{ fontWeight: 600, mt: '4px' }}>
              {rewardItem?.coupon} Coupons
            </Typography>
          </UIFlexWrapBox>
        )}
      </UIFlexWrapBox>

      <RewardsCardProgress
        myPoint={userPoint}
        itemPoint={rewardItem?.point ?? 0}
      />
      <StyledRewardsCardPoint sx={{ fontSize: '16px' }}>
        Points Completion:{' '}
        <span>
          {userPoint}/{rewardItem?.point}
        </span>
      </StyledRewardsCardPoint>
      <UIFlexWrapBox mt="20px">
        <StyledRewardsSpecKey>{product.short}</StyledRewardsSpecKey>
      </UIFlexWrapBox>
      <StyledDetailExchangeOfferButton onClick={onExchange}>
        Exchange Offer
      </StyledDetailExchangeOfferButton>
    </>
  );
};
