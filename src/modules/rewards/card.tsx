import { useRouter } from 'next/router';
import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { Button, Typography } from '@mui/material';
import { RewardItemType } from '@/types';
import { RewardsCardProgress } from './cardProgress';
import { RewardsCardPoint } from './cardPoint';
import { StyledRewardsCardPoint } from './ui';

export type RewardsCardProps = {
  point: number;
  item: RewardItemType;
};

export const RewardsCard = ({ point, item }: RewardsCardProps) => {
  const router = useRouter();
  return (
    <UIFlexWrapBox
      sx={{
        width: '260px',
        height: '460px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '2px solid rgba(137, 200, 198, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '30px',
        padding: '20px 20px 25px 20px',
        gap: 0,
      }}
    >
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
      <Button
        sx={{
          mt: '30px',
          width: '220px',
          height: '42px',
          background: 'rgba(137, 200, 198, 0.2)',
          border: '1px solid rgba(191, 215, 225, 0.05)',
          borderRadius: '20px',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '24px',
          color: '#83A9A8',
          textTransform: 'none',
        }}
        onClick={() => router.push(`/rewards/${item.id}`)}
      >
        Exchange Offer
      </Button>
    </UIFlexWrapBox>
  );
};
