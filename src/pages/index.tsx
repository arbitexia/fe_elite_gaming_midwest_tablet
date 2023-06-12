import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { AuthLayout } from '@/layouts';
import { SignUp, CheckIn } from '@/modules/auth';
import { useTranslation } from 'next-export-i18n';

const HomePage: NextPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { path: pageType } = router.query;

  return (
    <AuthLayout
      title={
        pageType === 'signup'
          ? `${t('common.signup')}`
          : `${t('common.checkin')}`
      }
    >
      {pageType === 'signup' ? <SignUp /> : <CheckIn />}
    </AuthLayout>
  );
};

export default HomePage;
