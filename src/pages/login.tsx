import { AppLayout } from '@/layouts';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const LoginPage = () => {
  const { t } = useTranslation('common');
  return <AppLayout>{t('login.login')}</AppLayout>;
};

export default LoginPage;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
