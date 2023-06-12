import { useState } from 'react';
import { Box } from '@mui/material';
import { UIDefaultButton } from '@/components/UI';
import { AuthTextField } from './AuthTextField';
import { useRouter } from 'next/router';
import { useAppToast } from '@/providers';
import { useAuth } from '@/hooks/auth';
import { useSelectedLanguage, useTranslation } from 'next-export-i18n';

export const Verify = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const appToast = useAppToast();
  const [value, setValue] = useState('');

  const { onVerifyPhone, tabletLocation } = useAuth({
    handleAuthVerifySuccess: () => {
      router.push({
        pathname: '/points',
        query: {
          ...(lang === 'es' && { lang }),
        },
      });
    },
  });
  const handleVerify = () => {
    if (value.length < 4) {
      appToast({ severity: 'error', message: t('common.invalid-code') });
      return;
    } else {
      onVerifyPhone(value, tabletLocation?.id ?? 0);
    }
  };
  return (
    <Box>
      <Box sx={{ marginTop: '40px', width: '100%' }}>
        <AuthTextField
          placeholder={t('common.placeholder-verify-phone')}
          mask="____"
          value={value}
          setValue={setValue}
          isVerify={true}
        />
      </Box>

      <UIDefaultButton onClick={handleVerify} sx={{ mt: '50px' }}>
        {t('common.verify-code')}
      </UIDefaultButton>
    </Box>
  );
};
