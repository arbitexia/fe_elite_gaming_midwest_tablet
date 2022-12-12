import { useRouter } from 'next/router';
import { UIImage } from '@/components/UI';
import { Typography } from '@mui/material';
import { RewardItemType } from '@/types';
import { RewardsCardProgress } from './cardProgress';
import { RewardsCardPoint } from './cardPoint';
import {
  StyledRewardsCardPoint,
  StyledRewardsCard,
  StyledCardExchangeOfferButton,
} from './ui';

export type RewardsCardProps = {
  point: number;
  item: RewardItemType;
};

export const RewardsCard = ({ point, item }: RewardsCardProps) => {
  const router = useRouter();
  return (
    <StyledRewardsCard>
      <UIImage src={item.url} width={220} height={235} />
      <RewardsCardProgress myPoint={point} itemPoint={item.point} />
      <RewardsCardPoint itemPoint={item.point} />
      <StyledRewardsCardPoint>
        Points Completion:{' '}
        <span>
          {point}/{item.point}
        </span>
      </StyledRewardsCardPoint>
      <Typography sx={{}}></Typography>
      <StyledCardExchangeOfferButton
        onClick={() => router.push(`/rewards/${item.id}`)}
      >
        Exchange Offer
      </StyledCardExchangeOfferButton>
    </StyledRewardsCard>
  );
};
