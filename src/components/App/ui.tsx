import { UIFlexColumnBox, UIFlexWrapBox } from '../UI';
import { styled, Dialog } from '@mui/material';

export const StyledDialog = styled(Dialog)({
  '.MuiPaper-root': {
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
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
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
