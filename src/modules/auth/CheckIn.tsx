import { useState } from 'react';
import { Box } from '@mui/material';
import { UIAuthTabs, UIDefaultButton } from '@/components/UI';
import { AuthTextField } from './AuthTextField';
import { useRouter } from 'next/router';
import { useAppToast } from '@/providers';
import { useAuth } from '@/hooks/auth';
import { useSelectedLanguage, useTranslation } from 'next-export-i18n';

export const CheckIn = () => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const appToast = useAppToast();
  const { path: type } = router.query;
  const [value, setValue] = useState('');
  const { onLoginWithUser, tabletLocation } = useAuth({
    handleAuthUserSuccess: () => {
      router.push({
        pathname: '/points',
        query: {
          ...(lang === 'es' && { lang }),
        },
      });
    },
  });

  const handleSend = () => {
    if (value.length < 10) {
      appToast({ severity: 'error', message: t('common.error-phone-number') });
    } else {
      if (tabletLocation?.id) {
        onLoginWithUser(value, tabletLocation.id);
      }
    }
  };

  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <UIAuthTabs isCheckIn={type !== 'signup'} />
      </Box>
      <Box sx={{ marginTop: '40px', width: '100%' }}>
        <AuthTextField
          placeholder={t('common.placeholder-phone-number')}
          mask="(XXX) XXX-XXXX"
          value={value}
          setValue={setValue}
        />
      </Box>

      <UIDefaultButton sx={{ mt: '50px' }} onClick={handleSend}>
        {t('common.go-to-points')}
      </UIDefaultButton>
    </Box>
  );
};
