import { Box } from '@mui/material';
import { UIDefaultButton } from '@/components/UI';
import { AuthTextField } from './AuthTextField';
import { useRouter } from 'next/router';

export const Verify = () => {
  const router = useRouter();
  const handleVerify = () => {
    router.push('/points');
  };
  return (
    <Box>
      <Box sx={{ marginTop: '40px', width: '100%' }}>
        <AuthTextField
          placeholder="Enter the code we sent to your phone number"
          mask="____"
          isVerify={true}
        />
      </Box>

      <UIDefaultButton onClick={handleVerify} sx={{ mt: '50px' }}>
        Verify Code
      </UIDefaultButton>
    </Box>
  );
};
