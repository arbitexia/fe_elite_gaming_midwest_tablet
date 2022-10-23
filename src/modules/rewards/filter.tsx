import {
  UIFlexSpaceBox,
  UIFlexWrapBox,
  UIImage,
  UISelectBox,
} from '@/components/UI';
import { StyledFilterBox } from './ui';
import { Box, Typography } from '@mui/material';

const RewardsFilterBox = () => {
  return (
    <UIFlexSpaceBox sx={{ mt: '26px' }}>
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
      <UIFlexWrapBox sx={{ gap: '30px' }}>
        <StyledFilterBox>
          <Typography>Location</Typography>
          <UISelectBox items={[]} />
        </StyledFilterBox>
        <StyledFilterBox>
          <Typography>Points</Typography>
          <UISelectBox items={[]} />
        </StyledFilterBox>
      </UIFlexWrapBox>
    </UIFlexSpaceBox>
  );
};

export default RewardsFilterBox;
