// import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  UIFlexSpaceBox,
  UISelectBox,
  UIImage,
  UIFlexWrapBox,
} from '@/components/UI';
import { StyledFilterBox } from './ui';
import { Typography, Button } from '@mui/material';
import { locationData, pointData } from '@/_mock/rewards';

const RewardsHeader = () => {
  // const [value, setValue] = useState('');
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  const router = useRouter();
  const { id } = router.query;

  return (
    <UIFlexSpaceBox sx={{ mt: '30px' }}>
      {id ? (
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
      ) : (
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '36px',
            lineHeight: '54px',
            alignItems: 'center',
            color: '#89C8C6',
          }}
        >
          Rewards
        </Typography>
      )}
      <UIFlexWrapBox sx={{ gap: '30px' }}>
        <StyledFilterBox>
          <Typography>Location</Typography>
          <UISelectBox items={locationData} />
        </StyledFilterBox>
        <StyledFilterBox>
          <Typography>Points</Typography>
          <UISelectBox items={pointData} />
        </StyledFilterBox>
      </UIFlexWrapBox>
    </UIFlexSpaceBox>
  );
};
export default RewardsHeader;
