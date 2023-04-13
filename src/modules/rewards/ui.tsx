import { styled, Button, Typography } from '@mui/material';
import { UIFlexWrapBox } from '@/components/UI';

export const StyledRewardsCard = styled(UIFlexWrapBox)({
  width: '260px',
  height: '470px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '2px solid rgba(137, 200, 198, 0.1)',
  backdropFilter: 'blur(20px)',
  borderRadius: '30px',
  padding: '20px 20px 25px 20px',
  gap: 0,
});

export const StyledFilterBox = styled(UIFlexWrapBox)({
  color: '#FFFFFF',
  fontSize: '16px',
  fontWeight: '500px',
  lineHeight: '24px',
  alignItems: 'center',
  gap: '15px',
});

export const StyledRewardsCardPoint = styled(Typography)({
  marginTop: '15px',
  fontWeight: '600',
  fontSize: '12px',
  lineHeight: '14px',
  color: 'rgba(137, 200, 198, 0.5)',
  span: {
    color: 'rgba(137, 200, 198, 0.8)',
  },
});

export const StyledRewardsCardCoupon = styled(Typography)({
  fontWeight: '600',
  fontSize: '12px',
  lineHeight: '14px',
  color: 'rgba(137, 200, 198, 0.8)',
});

export const StyledRewardsName = styled(Typography)({
  fontWeight: '600',
  fontSize: '32px',
  lineHeight: '48px',
  color: '#FFFFFF',
});

export const StyledRewardsLocation = styled(Typography)({
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: 'rgba(255, 255, 255, 0.57)',
});

export const StyledRewardsSpecKey = styled(Typography)({
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '200%',
  color: '#6F918A',
  textTransform: 'capitalize',
});

export const StyledRewardsSpecValue = styled(Typography)({
  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '200%',
  color: '#FFFFFF',
});

export const StyledCardExchangeOfferButton = styled(Button)({
  marginTop: '12px',
  width: '220px',
  height: '42px',
  background: 'rgba(137, 200, 198, 0.2)',
  border: '1px solid rgba(191, 215, 225, 0.05)',
  borderRadius: '20px',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#83A9A8',
  textTransform: 'none',
});

export const StyledDetailExchangeOfferButton = styled(Button)({
  marginTop: '40px',
  background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  border: '1px solid rgba(191, 215, 225, 0.05)',
  borderRadius: '12px',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  color: '#FFFFFF',
  width: '310px',
  height: '68px',
  textTransform: 'none',
});

export const StyledPrevButton = styled(Button)({
  width: '85px',
  height: '70px',
  background: 'rgba(0, 0, 0, 0.15)',
  border: '1px solid rgba(139, 149, 148, 0.2)',
  borderRadius: '12px',
});
