import { Typography, Box } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { UIFlexCenterBox } from '../UI';

const LoadingScreen = () => {
  return (
    <UIFlexCenterBox sx={{ width: '100%' }}>
      <CircularProgress />
    </UIFlexCenterBox>
  );
};

export default LoadingScreen;
