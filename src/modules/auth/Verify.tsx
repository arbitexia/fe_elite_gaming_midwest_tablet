import { useState } from 'react';
import { Box } from '@mui/material';
import { UIDefaultButton } from '@/components/UI';
import { AuthTextField } from './AuthTextField';
import { useRouter } from 'next/router';
import { useAppToast } from '@/providers';

export const Verify = () => {
  const router = useRouter();
  const appToast = useAppToast();
  const [value, setValue] = useState('');
  const handleVerify = () => {
    if (value.length < 4) {
      appToast({ severity: 'error', message: 'Invalid Code' });
      return;
    }
    router.push('/points');
  };
  return (
    <Box>
      <Box sx={{ marginTop: '40px', width: '100%' }}>
        <AuthTextField
          placeholder="Enter the code we sent to your phone number"
          mask="____"
          value={value}
          setValue={setValue}
          isVerify={true}
        />
      </Box>

      <UIDefaultButton onClick={handleVerify} sx={{ mt: '50px' }}>
        Verify Code
      </UIDefaultButton>
    </Box>
  );
};
