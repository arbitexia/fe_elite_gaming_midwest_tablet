import { useRouter } from 'next/router';
import type { GetServerSideProps, NextPage } from 'next';
import { AuthLayout } from '@/layouts';
import { SignUp, CheckIn } from '@/modules/auth';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const HomePage: NextPage = () => {
  const { t } = useTranslation(['common']);
  const router = useRouter();
  const { path: pageType } = router.query;

  return (
    <AuthLayout
      title={pageType === 'signup' ? `${t('signup')}` : `${t('checkin')}`}
    >
      {pageType === 'signup' ? <SignUp /> : <CheckIn />}
    </AuthLayout>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context?.locale ?? 'es', [
        'common',
        'signup',
      ])),
    },
  };
};
