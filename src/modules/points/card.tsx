import { Typography } from '@mui/material';
import { UIFlexCenterBox, UIFlexColumnBox } from '@/components/UI';
import { PointType } from '@/types';
import { StyledCardWrapper, StyledLocationBox } from './ui';

export type PointsCardProps = {
  index: number;
  deg: number;
  item: PointType;
};

const PointsCard = ({ index, deg, item }: PointsCardProps) => {
  return (
    <StyledCardWrapper
      sx={{
        transform: `rotateY(${deg * index}deg) translateZ(35vw)`,
      }}
    >
      <UIFlexCenterBox sx={{ position: 'relative', height: '100%' }}>
        <StyledLocationBox>
          {item.userLocation?.location?.name ?? ''}
        </StyledLocationBox>
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
      </UIFlexCenterBox>
    </StyledCardWrapper>
  );
};

export default PointsCard;
