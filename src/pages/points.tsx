import { useEffect, useState } from 'react';
import { Divider } from '@mui/material';
import { UIContainer, UIFlexColumnBox } from '@/components/UI';
import { DashboardLayout } from '@/layouts';
import { PointsMain, PointsHeader } from '@/modules/points';
import { usePoint, useAuth, useLocation } from '@/hooks';
import { GetPointParam, PointType, UserType } from '@/types';

import { useTranslation } from 'next-export-i18n';

const MyPoints = () => {
  const { t } = useTranslation();
  const { points, onGetPoints, onSendEmailCustomer } = usePoint();
  const { locations, onGetLocations } = useLocation();
  const [userPoints, setUserPoint] = useState<PointType[]>();
  const { me } = useAuth({});
  useEffect(() => {
    if (!me) return;
    const loadData = async () => {
      const param: GetPointParam = {
        userId: parseInt((me as UserType.User).id),
      };
      await onGetPoints(param);
      await onGetLocations({ filterBy: { search: '' } });
    };
    loadData();
  }, [me]);

  useEffect(() => {
    if (locations) {
      const filteredPoint = locations
        .filter(
          (location) =>
            !points.some(
              (point) => location.id === point.userLocation?.locationId
            )
        )
        ?.map((obj) => {
          return {
            id: 0,
            userLocationId: 0,
            userLocation: {
              id: 0,
              userId: Number((me as UserType.User)?.id) ?? 0,
              locationId: obj.id,
              location: obj,
              createdAt: obj.createdAt,
            },
            point: 0,
            createdAt: obj.createdAt,
          };
        });

      setUserPoint([...points, ...filteredPoint]);
    }
  }, [locations]);

  const handleSendEmail = async () => {
    await onSendEmailCustomer({
      customerId: parseInt((me as UserType.User).id),
    });
  };

  return (
    <DashboardLayout title={t('common.my-points')}>
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
          {userPoints && userPoints?.length > 0 && (
            <PointsMain points={userPoints} onSendEmail={handleSendEmail} />
          )}
        </UIFlexColumnBox>
      </UIContainer>
    </DashboardLayout>
  );
};

export default MyPoints;
