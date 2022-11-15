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

export interface AppLockScreenProps {
  open: boolean;
  handleClose: () => void;
}

export const AppLockScreen = ({ open, handleClose }: AppLockScreenProps) => {
  const appToast = useAppToast();
  const { onLoginWithTablet } = useAuth();
  const handleLogin = () => {
    onLoginWithTablet('Tablet Token');
    handleClose();
  };

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
      handleLogin();
    },
  });

  const handleFormikChange = (name: string, value: string) => {
    let error = '';
    if (name === 'identifier') {
      if (!value) error = 'ID is required';
    }
    if (name === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 8) {
        error = 'Password should be of minimum 8 characters length';
      }
    }

    if (error) appToast({ severity: 'error', message: error });
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
              Maximizing Your Revenue by Providing the Most Detailed Reporting
            </Typography>
          </UIFlexColumnBox>
        </UIAuthLogoContent>
        <UIAuthMainContent>
          <Box component="form" onSubmit={formik.handleSubmit}>
            <UIDefaultTextField
              name="identifier"
              value={formik.values.identifier}
              placeholder="Talbet ID"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
                handleFormikChange('identifier', e.target.value);
              }}
            />
            <UIDefaultTextField
              placeholder="Password"
              name="password"
              type="password"
              value={formik.values.password}
              sx={{ mt: '15px' }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
                handleFormikChange('password', e.target.value);
              }}
            />
            <UIDefaultButton type="submit" sx={{ mt: '70px' }}>
              Login
            </UIDefaultButton>
          </Box>
        </UIAuthMainContent>
      </UIFlexWrapBox>
    </StyledDialog>
  );
};
