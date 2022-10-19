import { useState } from 'react';
import { Box, Checkbox, Typography, Stack } from '@mui/material';
import {
  UIAuthTabs,
  UIDefaultButton,
  UIDefaultTextField,
  UIFlexWrapBox,
} from '@/components/UI';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as yup from 'yup';

export const SignUpSchema = yup.object({
  phonenumber: yup.string().required('Phone Number is Required'),
  email: yup.string().email().required('Email is required'),
  birthday: yup.string().required('Birthday is required'),
});

export const SignUp = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const { type } = router.query;

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      email: '',
      birthday: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log(values);
      checked && router.push('/auth/verify');
      // onLogin(values.username);
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack component="form" onSubmit={formik.handleSubmit}>
      <Box sx={{ mt: '115px', width: '100%' }}>
        <UIAuthTabs isCheckIn={type === 'checkin'} />
      </Box>
      <UIFlexWrapBox sx={{ marginTop: '50px', width: '100%', gap: '15px' }}>
        <UIDefaultTextField
          placeholder="Phone Number"
          id="phoneNumber"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <UIDefaultTextField
          placeholder="Email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <UIDefaultTextField
          placeholder="Birthday"
          id="birthday"
          name="birthday"
          value={formik.values.birthday}
          onChange={formik.handleChange}
          error={formik.touched.birthday && Boolean(formik.errors.birthday)}
          helperText={formik.touched.birthday && formik.errors.birthday}
        />
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
          By submitting this form, I confirm that I am at least 21 years of age,
          accept the <span>Terms and Conditions.</span>
        </Typography>
      </UIFlexWrapBox>

      <UIDefaultButton
        type="submit"
        sx={{ mt: '40px' }}
        onClick={() => formik.handleSubmit()}
      >
        Join Now
      </UIDefaultButton>
    </Stack>
  );
};
