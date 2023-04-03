import { useEffect } from 'react';
import { Divider } from '@mui/material';
import { UIContainer, UIFlexColumnBox } from '@/components/UI';
import { DashboardLayout } from '@/layouts';
import { PointsMain, PointsHeader } from '@/modules/points';
import { usePoint, useAuth } from '@/hooks';
import { GetPointParam, UserType } from '@/types';

const MyPoints = () => {
  const { points, onGetPoints } = usePoint();
  const { me } = useAuth({});
  useEffect(() => {
    if (!me) return;
    const param: GetPointParam = {
      userId: parseInt((me as UserType.User).id),
    };
    onGetPoints(param);
  }, [me]);
  console.log(points);
  return (
    <DashboardLayout title="My Points">
      <UIContainer sx={{ height: 'calc(100vh - 86px)' }}>
        <PointsHeader />
        <Divider sx={{ borderColor: 'rgba(137, 200, 198, 0.5)' }} />
        <UIFlexColumnBox
          sx={{
            mt: '30px',
            gap: '10vh',
            height: 'calc(100% - 122px)',
          }}
        >
          <PointsMain points={points} />
        </UIFlexColumnBox>
      </UIContainer>
    </DashboardLayout>
  );
};

export default MyPoints;
