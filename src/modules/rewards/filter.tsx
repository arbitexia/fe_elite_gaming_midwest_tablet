import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { Box, Typography } from '@mui/material';

const RewardsFilterBox = () => {
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
        <UIImage src={'images/icons/points.svg'} width={29} height={23} />
        <Typography>My Points : 29000</Typography>
      </Box>
    </UIFlexWrapBox>
  );
};

export default RewardsFilterBox;
