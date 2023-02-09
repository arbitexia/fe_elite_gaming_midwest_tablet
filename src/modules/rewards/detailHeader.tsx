// import { useState } from 'react';
import { useRouter } from 'next/router';
import { UIFlexSpaceBox, UIImage } from '@/components/UI';
import { Button } from '@mui/material';

const RewardsDetailHeader = () => {
  const router = useRouter();
  // const { id } = router.query;

  return (
    <UIFlexSpaceBox sx={{ mt: '30px' }}>
      <Button
        sx={{
          width: '85px',
          height: '70px',
          background: 'rgba(0, 0, 0, 0.15)',
          border: '1px solid rgba(139, 149, 148, 0.2)',
          borderRadius: '12px',
        }}
        onClick={() => router.push('/rewards')}
      >
        <UIImage src="images/icons/prev.svg" width={15} height={34} />
      </Button>
    </UIFlexSpaceBox>
  );
};
export default RewardsDetailHeader;
