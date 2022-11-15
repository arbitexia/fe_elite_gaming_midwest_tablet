import { styled } from '@mui/material';
import { UIFlexWrapBox, UIFlexColumnBox } from '@/components/UI';

export const StyledAuthContent = styled(UIFlexWrapBox)({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  maxWidth: '1160px',
  minWidth: '950px',
  minHeight: '700px',
  maxHeight: '770px',
  borderRadius: '30px',
  border: 'solid 2px rgba(137, 200, 198, 0.05)',
  width: '80%',
  height: '80%',
});

export const StyledLogoContent = styled(UIFlexColumnBox)({
  position: 'relative',
  height: '100%',
  width: '49%',
});

export const StyledMainContent = styled(UIFlexWrapBox)({
  width: '410px',
  height: '100%',
  alignItems: 'center',
  gap: 0,
});
