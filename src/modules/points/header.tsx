import { UIFlexWrapBox, UIFlexSpaceBox } from '@/components/UI';
import { Typography } from '@mui/material';
import { MyLocation as MyLocationIcon } from '@mui/icons-material';
import { useAuth } from '@/hooks';

const PointsHeader = () => {
  const { tabletLocation } = useAuth({});
  return (
    <UIFlexSpaceBox>
      <Typography
        sx={{
          mt: '30px',
          fontWeight: '600',
          fontSize: '36px',
          lineHeight: '54px',
          alignItems: 'center',
          color: '#89C8C6',
        }}
      >
        My Points
      </Typography>
      <UIFlexWrapBox sx={{ mt: '30px', alignItems: 'center', gap: '12px' }}>
        <MyLocationIcon
          sx={{ fontSize: '36px', color: 'rgba(255, 255, 255, 0.57);' }}
        />
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '28px',
            lineHeight: '54px',
            alignItems: 'center',
            color: 'rgba(255, 255, 255, 0.57);',
          }}
        >
          {`${tabletLocation?.name ?? ''}`}
        </Typography>
      </UIFlexWrapBox>
    </UIFlexSpaceBox>
  );
};

export default PointsHeader;
