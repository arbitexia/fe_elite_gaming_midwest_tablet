import { useState } from 'react';
import { Box } from '@mui/material';
import { UIAuthTabs, UIDefaultButton } from '@/components/UI';
import { AuthTextField } from './AuthTextField';
import { useRouter } from 'next/router';
import { useAppToast } from '@/providers';
import { useAuth } from '@/hooks/auth';

export const CheckIn = () => {
  const router = useRouter();
  const appToast = useAppToast();
  const { path: type } = router.query;
  const [value, setValue] = useState('');
  const { onLoginWithUser, tabletLocation } = useAuth({
    handleAuthUserSuccess: () => {
      router.push('/points');
    },
  });

  const handleSend = () => {
    if (value.length < 10) {
      appToast({ severity: 'error', message: 'Phone number is invalid' });
    } else {
      onLoginWithUser(value, tabletLocation?.id ?? 0);
    }
  };

  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <UIAuthTabs isCheckIn={type !== 'signup'} />
      </Box>
      <Box sx={{ marginTop: '40px', width: '100%' }}>
        <AuthTextField
          placeholder="Enter your phone number"
          mask="(XXX) XXX-XXXX"
          value={value}
          setValue={setValue}
        />
      </Box>

      <UIDefaultButton sx={{ mt: '50px' }} onClick={handleSend}>
        Go to points
      </UIDefaultButton>
    </Box>
  );
};
