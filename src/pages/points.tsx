import { Box, Typography, Button } from '@mui/material';
import { UIContainer, UIImage } from '@/components/UI';
import { DashboardLayout } from '@/layouts';

const MyPoints = () => {
  return (
    <DashboardLayout title="My Points">
      <UIContainer sx={{ height: 'calc(100vh - 86px)' }}>
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
        <Box
          sx={{
            mt: '20px',
            height: '1px',
            width: '100%',
            border: '1px solid rgba(137, 200, 198, 0.5)',
          }}
        />
        <Box
          sx={{
            mt: '30px',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            display: 'flex',
            gap: '10vh',
            height: 'calc(100% - 122px)',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <UIImage src="images/PointBack.png" width={615} height={390} />
            <Box
              sx={{
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                top: 0,
              }}
            >
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '106px',
                  lineHeight: '110%',
                  textAlign: 'center',
                  background:
                    'linear-gradient(166.49deg, #FFE600 9.69%, #88eb78 84.46%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  textShadow: '0px 4px 30px rgba(23, 52, 51, 0.15)',
                  WebkitTextStroke: '5px rgba(139, 127, 16, 0.7)',
                  borderImageSource:
                    'radial-gradient(68.72% 68.72% at 50% 38.27%, #fce502 0%, #88eb78 100%)',
                }}
              >
                9500
              </Typography>
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '64px',
                  lineHeight: '110%',
                  textAlign: 'center',
                  background:
                    'linear-gradient(166.49deg, #4eecb1 9.69%, #00F0FF 84.46%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  textShadow: '0px 4px 30px rgba(23, 52, 51, 0.15)',
                  WebkitTextStroke: '5px rgba(139, 127, 16, 0.7)',
                  borderImageSource:
                    'radial-gradient(68.72% 68.72% at 50% 38.27%, #4eecb1 0%, #01efff 100%)',
                }}
              >
                points
              </Typography>
            </Box>
          </Box>
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
        </Box>
      </UIContainer>
    </DashboardLayout>
  );
};

export default MyPoints;
