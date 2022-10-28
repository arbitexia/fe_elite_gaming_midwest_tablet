import { RewardsCardProgress } from './cardProgress';
import { RewardsCardPoint } from './cardPoint';
import { RewardItemType } from '@/types';
import {
  StyledRewardsName,
  StyledRewardsLocation,
  StyledRewardsCardPoint,
  StyledRewardsSpecKey,
  StyledRewardsSpecValue,
} from './ui';
import { UIFlexWrapBox } from '@/components/UI';
import { Box } from '@mui/material';

export type RewardsInfoBoxProps = {
  myPoint: number;
  rewardItem: RewardItemType;
};

export const RewardsInfoBox = ({
  myPoint,
  rewardItem,
}: RewardsInfoBoxProps) => {
  console.log(rewardItem.specifications);
  return (
    <>
      <StyledRewardsName>{rewardItem?.name}</StyledRewardsName>
      <StyledRewardsLocation>{rewardItem?.location}</StyledRewardsLocation>
      <Box mt="29px">
        <RewardsCardPoint itemPoint={rewardItem.point} />
      </Box>

      <RewardsCardProgress myPoint={myPoint} itemPoint={rewardItem.point} />
      <StyledRewardsCardPoint sx={{ fontSize: '16px' }}>
        Points Completion:{' '}
        <span>
          {myPoint}/{rewardItem.point}
        </span>
      </StyledRewardsCardPoint>
      <UIFlexWrapBox mt="20px">
        <Box>
          {Object.keys(rewardItem.specifications).map((key, index) => {
            return (
              <StyledRewardsSpecKey key={index}>{key}: </StyledRewardsSpecKey>
            );
          })}
        </Box>
        <Box>
          {Object.values(rewardItem.specifications).map((value, index) => {
            return (
              <StyledRewardsSpecValue key={index}>
                {value}
              </StyledRewardsSpecValue>
            );
          })}
        </Box>
      </UIFlexWrapBox>
    </>
  );
};
