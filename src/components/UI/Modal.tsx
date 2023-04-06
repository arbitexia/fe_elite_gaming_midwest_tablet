import { styled, Dialog } from '@mui/material';

export const UIDialog = styled(Dialog)({
  '.MuiPaper-root': {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    borderRadius: '30px',
    border: 'solid 2px rgba(137, 200, 198, 0.05)',
    width: '550px',
    height: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: '32px',
  },
});
