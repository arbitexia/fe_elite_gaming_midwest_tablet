import React, { useEffect, useState } from 'react';
import { Divider } from '@mui/material';
import { UIContainer, UIWrapPanel } from '@/components/UI';
import {
  RewardsHeader,
  RewardsPointsBox,
  RewardsCard,
} from '@/modules/rewards';
import { DashboardLayout } from '@/layouts';
import { useAuth, usePoint, useReward } from '@/hooks';
import { UserType } from '@/types';

const Rewards = () => {
  const { rewards, onFilterRewards } = useReward();
  const { points, onGetPoints } = usePoint();
  const { me } = useAuth({});
  const [filterPoint, setFilterPoint] = useState('');
  const [filterLocation, setFilterLocation] = useState<number>();
  useEffect(() => {
    fetchRewards();
  }, [filterLocation]);

  const fetchRewards = async () => {
    try {
      await onGetPoints({
        userId: Number((me as UserType.User)?.id) ?? 0,
      });
      await onFilterRewards({
        filterBy: { locationId: filterLocation },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout title="My Points">
      <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
        <RewardsHeader setFilterLocation={setFilterLocation} />
        <Divider
          sx={{
            mt: '26px',
            borderColor: 'rgba(137, 200, 198, 0.5)',
          }}
        />
        <RewardsPointsBox />
        <UIWrapPanel itemSpacing={40} paddingY={60}>
          {rewards.map((item) => {
            const point =
              points.find(
                (p) => p?.userLocation?.locationId === item.locationId
              )?.point ?? 0;
            return <RewardsCard key={item.id} point={point} item={item} />;
          })}
        </UIWrapPanel>
      </UIContainer>
    </DashboardLayout>
  );
};
export default Rewards;
