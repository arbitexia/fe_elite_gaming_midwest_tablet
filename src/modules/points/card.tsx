import { Box, Typography } from '@mui/material';
import { UIFlexCenterBox, UIFlexColumnBox } from '@/components/UI';
import { LocationType } from '@/types';

export type PointsCardProps = {
  index: number;
  deg: number;
  item: LocationType;
};

const PointsCard = ({ index, deg, item }: PointsCardProps) => {
  return (
    <Box
      sx={{
        background: 'url(images/PointBack.png)',
        backgroundSize: 'cover',
        position: 'absolute',
        width: '50vw',
        height: 'calc(50vw / 615 * 390)',
        maxWidth: '615px',
        maxHeight: '390px',
        boxShadow: '0 5px 20px rgba(0,0,0,.1)',
        borderRadius: '6px',
        transformOrigin: 'center',
        transform: `rotateY(${deg * index}deg) translateZ(35vw)`,
        transition: 'transform 1s',
      }}
    >
      <UIFlexCenterBox
        sx={{
          background: 'rgba(114, 239, 232, 0.5)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          width: '196px',
          height: '50px',
          borderRadius: '30px 0px 30px 0px',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '24px',
          color: '#184D59',
          mt: '6px',
          ml: '8px',
        }}
      >
        {item.location}
      </UIFlexCenterBox>
      <UIFlexColumnBox
        sx={{
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
          {item.point}
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
      </UIFlexColumnBox>
    </Box>
  );
};

export default PointsCard;
