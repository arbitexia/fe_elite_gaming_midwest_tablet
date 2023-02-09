import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { Box, Typography } from '@mui/material';

interface RewardsFilterBoxProps {
  totalPoint: number;
}
const RewardsFilterBox = ({ totalPoint }: RewardsFilterBoxProps) => {
  return (
    <UIFlexWrapBox sx={{ mt: '26px', justifyContent: 'end' }}>
      <Box
        sx={{
          display: 'flex',
          color: '#FFFFFF',
          fontSize: '18px',
          fontWeight: '600px',
          lineHeight: '27px',
          gap: '12px',
        }}
      >
        <UIImage src={'images/icons/points-color.svg'} width={29} height={23} />
        <Typography>My Points : {totalPoint}</Typography>
      </Box>
    </UIFlexWrapBox>
  );
};

export default RewardsFilterBox;
