import React, { useState } from 'react';
import { Box, Checkbox, Typography, Stack } from '@mui/material';
import {
  UIAuthTabs,
  UIDefaultButton,
  UIDefaultTextField,
  UIFlexWrapBox,
} from '@/components/UI';
import { Verify } from '@/modules/auth';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { useAppToast } from '@/providers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import InputMask from 'react-input-mask';
import { Moment } from 'moment';
import { useAuth } from '@/hooks/auth';
import { phoneNumberToString } from '@/libs/data-helper';
import { useTranslation } from 'next-i18next';
import { i18translateType } from '@/types';

export const SignUp = () => {
  const { t }: i18translateType = useTranslation(['signup']);
  const router = useRouter();
  const appToast = useAppToast();
  const [checked, setChecked] = useState(false);
  const [isShowVerify, setIsShowVerify] = useState(false);
  const { path: type } = router.query;
  const { onRegister, tabletLocation } = useAuth({
    handleAuthRegisterSuccess: () => {
      setIsShowVerify(true);
    },
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      email: '',
      birthday: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      if (handleFormikChange('phoneNumber', values.phoneNumber)) return;
      if (handleFormikChange('email', values.email)) return;
      if (handleFormikChange('birthday', values.birthday)) return;
      onRegister(
        phoneNumberToString(values.phoneNumber),
        values.email,
        values.birthday,
        tabletLocation?.id
      );
    },
  });

  const handleFormikChange = (
    name: string,
    value: string,
    isOnBlur = false
  ) => {
    let error = '';
    if (name === 'phoneNumber') {
      const phoneRegExp = /^\([0-9]{3}\) [0-9]{3} [0-9]{4}$/i;
      if (!value) error = t('error-phone-number-empty');
      else if (!value.match(phoneRegExp) || value.length < 10)
        error = t('error-phone-number-valid');
    }
    if (name === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!value) {
        error = t('error-email');
      } else if (!regex.test(value)) {
        error = t('invalid-email');
      }
    }
    if (name === 'birthday') {
      const regex =
        /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\d\d$/i;
      if (!value) {
        error = t('error-birthday');
      } else if (!regex.test(value)) {
        error = t('invalid-birthday');
      }
    }
    if (error) appToast({ severity: 'error', message: error, isOnBlur });
    return error;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <UIAuthTabs isCheckIn={type !== 'signup'} />
      </Box>
      {isShowVerify ? (
        <Verify />
      ) : (
        <Stack component="form" onSubmit={formik.handleSubmit}>
          <UIFlexWrapBox sx={{ marginTop: '50px', width: '100%', gap: '15px' }}>
            <UIDefaultTextField
              name="phoneNumber"
              placeholder={t('phone-number')}
              value={formik.values.phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
              }}
              onBlur={(e) => {
                e.preventDefault();
                handleFormikChange('phoneNumber', e.target.value, true);
              }}
              InputProps={{
                inputComponent: TextMaskCustom as any,
              }}
            />

            <UIDefaultTextField
              placeholder={t('email')}
              id="email"
              name="email"
              value={formik.values.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                formik.handleChange(e);
              }}
              onBlur={(e) => {
                handleFormikChange('email', e.target.value, true);
              }}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <MobileDatePicker
                inputFormat="MM/DD/YYYY"
                value={formik.values.birthday}
                onChange={(value: Moment | null) => {
                  formik.setFieldValue(
                    'birthday',
                    value ? value.format('MM/DD/YYYY') : ''
                  );
                }}
                renderInput={(params) => {
                  return (
                    <UIDefaultTextField
                      {...params}
                      placeholder={t('birthday')}
                    />
                  );
                }}
              />
            </LocalizationProvider>
          </UIFlexWrapBox>
          <UIFlexWrapBox sx={{ mt: '30px' }}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              sx={{
                padding: 0,
                '.MuiSvgIcon-root': { fontSize: 30, color: '#008A83' },
              }}
            />
            <Typography
              sx={{
                width: '365px',
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '175%',
                color: '#78838C',
                span: { color: '#008A83' },
              }}
            >
              {t('desc-checkbox')} <span>{t('terms-and-condition')}</span>
            </Typography>
          </UIFlexWrapBox>

          <UIDefaultButton
            disabled={!checked}
            type="submit"
            sx={{ mt: '40px' }}
          >
            {t('join-now')}
          </UIDefaultButton>
        </Stack>
      )}
    </>
  );
};

interface CustomProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
}
const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <InputMask
        id="phoneNumber"
        mask="(999) 999 9999"
        onChange={onChange}
        maskChar="X"
        {...other}
      />
    );
  }
);
