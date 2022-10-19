import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const router = useRouter();
  const handleCheckIn = () => {
    router.push('/auth/checkin');
  };

  return <Button onClick={handleCheckIn}>Check In</Button>;
};

export default Home;
