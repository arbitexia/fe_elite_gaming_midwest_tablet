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
import { Box } from '@mui/material';

export type RewardsInfoBoxProps = {
  myPoint: number;
  rewardItem: RewardType.Data;
  onExchange: () => void;
};

export const RewardsInfoBox = ({
  myPoint,
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
      <Box mt="29px">
        <RewardsCardPoint itemPoint={product.point} />
      </Box>

      <RewardsCardProgress myPoint={myPoint} itemPoint={product.point} />
      <StyledRewardsCardPoint sx={{ fontSize: '16px' }}>
        Points Completion:{' '}
        <span>
          {myPoint}/{product.point}
        </span>
      </StyledRewardsCardPoint>
      <UIFlexWrapBox mt="20px">
        <StyledRewardsSpecKey>{product.short}</StyledRewardsSpecKey>
        {/* <Box>
          {Object.keys(product.short).map((key, index) => {
            return (
              <StyledRewardsSpecKey key={index}>{key}: </StyledRewardsSpecKey>
            );
          })}
        </Box>
        <Box>
          {Object.values(product.short).map((value, index) => {
            return (
              <StyledRewardsSpecValue key={index}>
                {value}
              </StyledRewardsSpecValue>
            );
          })}
        </Box> */}
      </UIFlexWrapBox>
      <StyledDetailExchangeOfferButton onClick={onExchange}>
        Exchange Offer
      </StyledDetailExchangeOfferButton>
    </>
  );
};
