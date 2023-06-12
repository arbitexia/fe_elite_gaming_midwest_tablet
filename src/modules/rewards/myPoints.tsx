import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { usePoint } from '@/hooks';
import { Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

const RewardsPointsBox = () => {
  const { onGetPointCount } = usePoint();
  const { t } = useTranslation();
  return (
    <UIFlexWrapBox sx={{ mt: '26px', gap: '12px', justifyContent: 'end' }}>
      <UIImage src={'images/icons/points.svg'} width={29} height={23} />
      <Typography
        sx={{
          color: '#FFFFFF',
          fontSize: '18px',
          fontWeight: '600px',
          lineHeight: '27px',
        }}
      >
        {t('common.my-total-points')} : {onGetPointCount() ?? 0}
      </Typography>
    </UIFlexWrapBox>
  );
};

export default RewardsPointsBox;
