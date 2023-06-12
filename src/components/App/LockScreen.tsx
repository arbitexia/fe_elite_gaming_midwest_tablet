import { Typography, Box } from '@mui/material';
import {
  UIDefaultButton,
  UIDefaultTextField,
  UIFlexColumnBox,
  UIFlexWrapBox,
  UIImage,
  UIAuthLogoContent,
  UIAuthMainContent,
} from '../UI';
import { StyledDialog } from './ui';
import { useAuth } from '@/hooks/auth';
import { useFormik } from 'formik';
import { useAppToast } from '@/providers';
import { useTranslation } from 'next-export-i18n';

export interface AppLockScreenProps {
  open: boolean;
  handleClose: () => void;
}

export const AppLockScreen = ({ open, handleClose }: AppLockScreenProps) => {
  const { t } = useTranslation();
  const appToast = useAppToast();
  const { onLoginWithTablet } = useAuth({
    handleAuthTabletSuccess: () => {
      handleClose();
    },
  });

  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      if (handleFormikChange('identifier', values.identifier)) return;
      if (handleFormikChange('password', values.password)) return;
      onLoginWithTablet(values.identifier, values.password);
    },
  });

  const handleFormikChange = (
    name: string,
    value: string,
    isOnBlur: boolean = false
  ) => {
    let error = '';
    if (name === 'identifier') {
      if (!value) error = t('common.error-tablet-id');
    }
    if (name === 'password') {
      if (!value) {
        error = t('common.error-password');
      } else if (value.length < 8) {
        error = error = t('common.error-password-length');
      }
    }

    if (error) appToast({ severity: 'error', message: error, isOnBlur });
    return error;
  };

  return (
    <StyledDialog open={open}>
      <UIFlexWrapBox width="100%">
        <UIAuthLogoContent>
          <UIFlexColumnBox>
            <UIImage src={'images/icons/logo.svg'} width={290} height={277} />
            <Typography
              sx={{
                width: '345px',
                fontWeight: '600',
                fontSize: '18px',
                lineHeight: '160%',
                textAlign: 'center',
                color: '#6F918A',
                paddingTop: '50px',
              }}
            >
              {t('common.desc-checkin')}
            </Typography>
          </UIFlexColumnBox>
        </UIAuthLogoContent>
        <UIAuthMainContent>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <UIDefaultTextField
              name="identifier"
              value={formik.values.identifier}
              placeholder={t('common.tablet-id')}
              onBlur={(e) => {
                handleFormikChange('identifier', e.target.value, true);
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
              }}
            />
            <UIDefaultTextField
              placeholder={t('common.password')}
              name="password"
              type="password"
              value={formik.values.password}
              sx={{ mt: '15px' }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
              }}
              onBlur={(e) => {
                handleFormikChange('password', e.target.value, true);
              }}
            />
            <UIDefaultButton type="submit" sx={{ mt: '70px' }}>
              {t('common.login')}
            </UIDefaultButton>
          </Box>
        </UIAuthMainContent>
      </UIFlexWrapBox>
    </StyledDialog>
  );
};
