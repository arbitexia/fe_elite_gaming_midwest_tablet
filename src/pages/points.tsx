import { Box, Typography, Button } from '@mui/material';
import {
  UIContainer,
  UIFlexColumnBox,
  UIFlexSpaceBox,
  UIFlexWrapBox,
} from '@/components/UI';
import { DashboardLayout } from '@/layouts';
import { PointsMain } from '@/modules/points';
import { MyLocation as MyLocationIcon } from '@mui/icons-material';

const MyPoints = () => {
  return (
    <DashboardLayout title="My Points">
      <UIContainer sx={{ height: 'calc(100vh - 86px)' }}>
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
              Mariland, USA
            </Typography>
          </UIFlexWrapBox>
        </UIFlexSpaceBox>
        <Box
          sx={{
            mt: '20px',
            height: '1px',
            width: '100%',
            border: '1px solid rgba(137, 200, 198, 0.5)',
          }}
        />
        <UIFlexColumnBox
          sx={{
            mt: '30px',
            gap: '10vh',
            height: 'calc(100% - 122px)',
          }}
        >
          <PointsMain />
          <Button
            sx={{
              background:
                'linear-gradient(86.57deg, #1D8E7A 25.92%, #0EA59C 98.39%)',
              boxShadow: '0px 6.3px 8.19px rgba(0, 0, 0, 0.21)',
              borderRadius: '12px',
              width: '300px',
              height: '68px',
            }}
          >
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '30px',
                color: '#FAFF00',
                WebkitTextStroke: '1px rgba(19, 90, 86, 0.56)',
              }}
            >
              Send Email
            </Typography>
          </Button>
        </UIFlexColumnBox>
      </UIContainer>
    </DashboardLayout>
  );
};

export default MyPoints;
