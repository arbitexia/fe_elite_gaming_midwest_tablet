import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { AuthLayout } from '@/layouts';
import { SignUp, CheckIn } from '@/modules/auth';

const HomePage: NextPage = () => {
  const router = useRouter();
  const { path: pageType } = router.query;
  return (
    <AuthLayout title={pageType === 'signup' ? 'Sign Up' : 'Check In'}>
      {pageType === 'signup' ? <SignUp /> : <CheckIn />}
    </AuthLayout>
  );
};

export default HomePage;
