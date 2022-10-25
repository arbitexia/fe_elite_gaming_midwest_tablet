import { useState, useEffect } from 'react';
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
import * as yup from 'yup';
import { useAppToast } from '@/providers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';

const phoneRegExp = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;

export const SignUpSchema = yup.object({
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phonenumber is not valid')
    .min(10)
    .required('Phonenumber is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  birthday: yup.date().required('Birthday is required'),
});

export const SignUp = () => {
  const router = useRouter();
  const appToast = useAppToast();
  const [checked, setChecked] = useState(false);
  const [isShowVerify, setIsShowVerify] = useState(false);
  const { path: type } = router.query;

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      email: '',
      birthday: '',
    },
    validateOnChange: false,
    validationSchema: SignUpSchema,
    onSubmit: () => {
      checked && setIsShowVerify(true);
    },
  });

  const handlePhoneChange = (e) => {
    const value: string = e.target.value;
    !value.match(phoneRegExp) &&
      appToast({ severity: 'error', message: 'Phonenumber is not valid' });
    formik.handleChange(e);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // useEffect(() => {
  //   if (formik.touched.phoneNumber && formik.errors.phoneNumber)
  //     appToast({ severity: 'error', message: formik.errors.phoneNumber });
  //   if (formik.touched.email && formik.errors.email)
  //     appToast({ severity: 'error', message: formik.errors.email });
  //   if (formik.touched.birthday && formik.errors.birthday)
  //     appToast({ severity: 'error', message: formik.errors.birthday });
  // });
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
              placeholder="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={handlePhoneChange}
            />
            <UIDefaultTextField
              placeholder="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <MobileDatePicker
                inputFormat="MM/DD/YYYY"
                value={formik.values.birthday}
                onChange={(value) => {
                  value && formik.setFieldValue('birthday', value);
                }}
                renderInput={(params) => {
                  return (
                    <UIDefaultTextField {...params} placeholder="Birthday" />
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
              By submitting this form, I confirm that I am at least 21 years of
              age, accept the <span>Terms and Conditions.</span>
            </Typography>
          </UIFlexWrapBox>

          <UIDefaultButton type="submit" sx={{ mt: '40px' }}>
            Join Now
          </UIDefaultButton>
        </Stack>
      )}
    </>
  );
};
