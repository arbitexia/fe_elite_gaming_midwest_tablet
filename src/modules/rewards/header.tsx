import { useState } from 'react';
import { UIFlexSpaceBox, UISearchBox } from '@/components/UI';
import { Typography } from '@mui/material';

const RewardsHeader = () => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <UIFlexSpaceBox sx={{ mt: '30px' }}>
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

      <UISearchBox value={value} onChange={handleChange} />
    </UIFlexSpaceBox>
  );
};
export default RewardsHeader;
