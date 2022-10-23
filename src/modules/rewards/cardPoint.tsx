import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { Typography } from '@mui/material';

export const RewardsCardPoint = ({ itemPoint }: { itemPoint: number }) => {
  return (
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
      <Typography>{itemPoint} points</Typography>
    </UIFlexWrapBox>
  );
};
