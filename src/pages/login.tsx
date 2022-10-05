import { Box, Button } from '@mui/material';
import { AppLayout } from '@/layouts';
import { useTranslation, LanguageSwitcher } from 'next-export-i18n';

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <AppLayout>
      <LanguageSwitcher lang="es">
        <Button variant="outlined">es</Button>
      </LanguageSwitcher>{' '}
      |{' '}
      <LanguageSwitcher lang="en">
        <Button variant="outlined">en</Button>
      </LanguageSwitcher>
      <Box>{t('login.login')}</Box>
    </AppLayout>
  );
};

export default LoginPage;
