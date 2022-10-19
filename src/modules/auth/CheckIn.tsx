import { useState } from 'react';
import { Box } from '@mui/material';
import { UIAuthTabs, UIDefaultButton } from '@/components/UI';
import { AuthTextField } from './AuthTextField';
import { useRouter } from 'next/router';
import { Verify } from '@/modules/auth';

export const CheckIn = () => {
  const router = useRouter();
  const { path: type } = router.query;
  const [isShowVerify, setIsShowVerify] = useState(false);

  const handleSend = () => {
    setIsShowVerify(true);
  };

  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <UIAuthTabs isCheckIn={type !== 'signup'} />
      </Box>
      {isShowVerify ? (
        <Verify />
      ) : (
        <>
          <Box sx={{ marginTop: '40px', width: '100%' }}>
            <AuthTextField
              placeholder="Enter your phone number"
              mask="(XXX) XXX-XXXX"
            />
          </Box>

          <UIDefaultButton sx={{ mt: '50px' }} onClick={handleSend}>
            Send Code
          </UIDefaultButton>
        </>
      )}
    </Box>
  );
};
