import { UIFlexCenterBox } from '@/components/UI';
import { styled, Box, Button } from '@mui/material';

export const StyledCardWrapper = styled(Box)({
  background: 'url(/images/PointBack.png)',
  backgroundSize: 'cover',
  position: 'absolute',
  width: '50vw',
  height: 'calc(50vw / 615 * 390)',
  maxWidth: '615px',
  maxHeight: '390px',
  boxShadow: '0 5px 20px rgba(0,0,0,.1)',
  borderRadius: '6px',
  transformOrigin: 'center',
  transition: 'transform 1s',
});

export const StyledArrowButton = styled(Button)({
  position: 'absolute',
  top: 'calc(50% - 34px)',
  width: '68px',
  height: '68px',
});

export const StyledLocationBox = styled(UIFlexCenterBox)({
  position: 'absolute',
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
  top: '6px',
  left: '8px',
});

export const StyledPointsCardArea = styled(Box)({
  position: 'relative',
  width: '50vw',
  height: 'calc(50vw / 615 * 390)',
  maxWidth: '615px',
  maxHeight: '390px',
  margin: '0',
  color: 'white',
  perspective: '1000px',
  transformOrigin: 'center',
});

export const StyledAnimationBox = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  transformOrigin: 'center',
  transformStyle: 'preserve-3d',
});

export const StyledSendButton = styled(Button)({
  background: 'linear-gradient(86.57deg, #1D8E7A 25.92%, #0EA59C 98.39%)',
  boxShadow: '0px 6.3px 8.19px rgba(0, 0, 0, 0.21)',
  borderRadius: '12px',
  width: '300px',
  height: '68px',
});
