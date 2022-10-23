import { styled, Typography } from '@mui/material';
import { UIFlexWrapBox } from '@/components/UI';
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
