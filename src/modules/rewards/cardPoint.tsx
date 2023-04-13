import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { Typography } from '@mui/material';

type RewardsCardPointProps = {
  itemPoint?: number;
};
export const RewardsCardPoint = ({ itemPoint }: RewardsCardPointProps) => {
  return (
    <>
      {itemPoint && (
        <UIFlexWrapBox
          sx={{
            mt: '14px',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '27px',
            color: '#FFFFFF',
          }}
        >
          <UIImage src="images/icons/coin.png" width={20} height={20} />
          <Typography>{itemPoint} points</Typography>
        </UIFlexWrapBox>
      )}
    </>
  );
};
