import { styled, Button } from '@mui/material';

export const UIDefaultButton = styled(Button)({
  background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  boxShadow: '0px 6.3px 8.19px rgba(0, 0, 0, 0.21)',
  borderRadius: '12px',
  fontWeight: '600',
  fontSize: '20.0063px',
  lineHeight: '30px',
  color: '#FFFFFF',
  width: '100%',
  height: '68px',
});

export const UIHoverButton = styled(Button)({
  background: 'rgba(137, 200, 198, 0.2)',
  color: '#83A9A8',
  border: '1px solid rgba(191, 215, 225, 0.05)',
  borderRadius: '20px',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  textTransform: 'none',
  '&:hover': {
    color: '#FFFFFF',
    background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  },
  '&:disabled': {
    color: '#83A9A8',
    background: 'rgba(137, 200, 198, 0.2)',
  },
});

export const UINumberButton = styled(Button)({
  background: 'rgba(137, 200, 198, 0.15)',
  border: '1px solid rgba(139, 149, 148, 0.2)',
  borderRadius: '12px',
  width: '85px',
  height: '70px',
  fontWeight: '600',
  fontSize: '26px',
  lineHeight: '39px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#B0B0B0',
});

export const UIBackButton = styled(Button)({
  background: 'rgba(0, 0, 0, 0.15)',
  border: '1px solid rgba(139, 149, 148, 0.2)',
  borderRadius: '12px',
  width: '85px',
  height: '70px',
  padding: '25px 33px 25px 27px',
});
