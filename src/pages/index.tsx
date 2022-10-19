import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const router = useRouter();
  router.push('/auth/checkin');
  return <></>;
};

export default Home;
