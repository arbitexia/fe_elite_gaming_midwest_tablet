import { Box } from '@mui/material';
import { UIAuthTabs, UIDefaultButton } from '@/components/UI';
import { AuthTextField } from './AuthTextField';
import { useRouter } from 'next/router';

export const Verify = () => {
  const router = useRouter();
  const { type } = router.query;
  return (
    <Box>
      <Box sx={{ mt: '115px', width: '100%' }}>
        <UIAuthTabs isCheckIn={type === 'checkin'} />
      </Box>
      <Box sx={{ marginTop: '40px', width: '100%' }}>
        <AuthTextField
          placeholder="Enter the code we sent to your phone number"
          mask="____"
          isVerify={true}
        />
      </Box>

      <UIDefaultButton sx={{ mt: '50px' }}>Verify Code</UIDefaultButton>
    </Box>
  );
};
