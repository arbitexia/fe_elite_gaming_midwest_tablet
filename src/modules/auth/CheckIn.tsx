import { Box } from '@mui/material';
import { UIAuthTabs, UIDefaultButton } from '@/components/UI';
import { AuthTextField } from './AuthTextField';
import { useRouter } from 'next/router';

export const CheckIn = () => {
  const router = useRouter();
  const { type } = router.query;

  const handleSend = () => {
    router.push('/auth/verify');
  };

  return (
    <Box>
      <Box sx={{ mt: '115px', width: '100%' }}>
        <UIAuthTabs isCheckIn={type === 'checkin'} />
      </Box>
      <Box sx={{ marginTop: '40px', width: '100%' }}>
        <AuthTextField
          placeholder="Enter your phone number"
          mask="(XXX) XXX-XXXX"
        />
      </Box>

      <UIDefaultButton sx={{ mt: '50px' }} onClick={handleSend}>
        Send Code
      </UIDefaultButton>
    </Box>
  );
};
