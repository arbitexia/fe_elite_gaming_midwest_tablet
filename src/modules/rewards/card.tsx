import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { RewardType } from '@/types';
import { RewardsCardProgress } from './cardProgress';
import { RewardsCardPoint } from './cardPoint';
import {
  StyledRewardsCardPoint,
  StyledRewardsCard,
  StyledCardExchangeOfferButton,
} from './ui';

export type RewardsCardProps = {
  point: number;
  item: RewardType.Data;
};

export const RewardsCard = ({ point, item }: RewardsCardProps) => {
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
            : 'images/noImage.jpg'
        }
        alt="image"
      />
      <RewardsCardProgress myPoint={point} itemPoint={item?.product.point} />
      <RewardsCardPoint itemPoint={item?.product.point} />
      <StyledRewardsCardPoint>
        Points Completion:{' '}
        <span>
          {point}/{item?.product.point}
        </span>
      </StyledRewardsCardPoint>
      <StyledCardExchangeOfferButton
        onClick={() => router.push(`/rewards/${item.id}`)}
      >
        Exchange Offer
      </StyledCardExchangeOfferButton>
    </StyledRewardsCard>
  );
};
