import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { Box, Button, Typography } from '@mui/material';
import { RewardItemType } from '@/types';

export type RewardsCardProps = {
  point: number;
  item: RewardItemType;
};

export const RewardsCard = ({ point, item }: RewardsCardProps) => {
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
      <UIFlexWrapBox
        sx={{
          mt: '18px',
          background: 'rgba(137, 200, 198, 0.3)',
          border: '1px solid rgba(47, 16, 16, 0.05)',
          backdropFilter: 'blur(95.4109px)',
          borderRadius: '15px',
          width: '210px',
          height: '30px',
          padding: '3px',
          position: 'relative',
        }}
      >
        <UIFlexWrapBox
          sx={{
            background:
              point >= item.point / 2
                ? 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)'
                : 'rgba(82, 192, 199, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '11px',
            width:
              point >= item.point ? '100%' : `${(point / item.point) * 100}%`,
            height: '100%',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            right: -10,
            top: -5,
            filter:
              point >= item.point
                ? 'drop-shadow(0px 5.60991px 8.41486px rgba(234, 176, 32, 0.4))'
                : 'none',
          }}
        >
          <UIImage
            src={`images/icons/star-${
              point >= item.point ? 'light' : 'dark'
            }.svg`}
            width={36}
            height={36}
          />
        </Box>
      </UIFlexWrapBox>
      <UIFlexWrapBox
        sx={{
          mt: '14px',
          alignItems: 'center',
          fontWeight: '600',
          fontSize: '18px',
          lineHeight: '27px',
          display: 'flex',
          color: '#FFFFFF',
        }}
      >
        <UIImage src="images/icons/coin.png" width={20} height={20} />
        <Typography>{item.point} points</Typography>
      </UIFlexWrapBox>
      <Typography
        sx={{
          mt: '10px',
          fontWeight: '600',
          fontSize: '12px',
          lineHeight: '14px',
          color: 'rgba(137, 200, 198, 0.5)',
          span: {
            color: 'rgba(137, 200, 198, 0.8)',
          },
        }}
      >
        Points Completion:{' '}
        <span>
          {point}/{item.point}
        </span>
      </Typography>
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
      >
        Exchange Offer
      </Button>
    </UIFlexWrapBox>
  );
};
