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
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Rewards = () => {
  const { t } = useTranslation();
  const { rewards, onFilterRewards } = useReward();
  const { points, onGetPoints } = usePoint();
  const { me, tabletLocation } = useAuth({});
  const [filterPoint, setFilterPoint] = useState<number>(0);
  const [filterLocation, setFilterLocation] = useState<number>();
  useEffect(() => {
    fetchRewards();
  }, [filterLocation, filterPoint]);

  useEffect(() => {
    if (tabletLocation) {
      setFilterLocation(tabletLocation.id);
    }
  }, [tabletLocation]);

  const fetchRewards = async () => {
    let from = 0;
    let to = 0;
    try {
      if (filterPoint > 0) {
        switch (filterPoint) {
          case 1:
            from = 0;
            to = 1000;
            break;
          case 2:
            from = 1000;
            to = 2000;
            break;
          case 3:
            from = 30000;
            to = 4000;
            break;
          case 4:
            from = 4000;
            to = 5000;
            break;
          default:
            from = 5000;
            to = 1;
            break;
        }
      }
      await onGetPoints({
        userId: Number((me as UserType.User)?.id) ?? 0,
      });
      if (filterLocation) {
        await onFilterRewards({
          filterBy: {
            locationId: filterLocation,
            fromPoint: from,
            toPoint: to,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout title={t('my-points')}>
      <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
        <RewardsHeader
          setFilterLocation={setFilterLocation}
          setFilterPoint={setFilterPoint}
          isFilter={true}
        />
        <Divider
          sx={{
            mt: '26px',
            borderColor: 'rgba(137, 200, 198, 0.5)',
          }}
        />
        <RewardsPointsBox />
        <UIWrapPanel itemSpacing={40} paddingY={60}>
          {rewards?.map((item) => {
            const userPoint =
              points.find(
                (p) => p?.userLocation?.locationId === item.locationId
              )?.point ?? 0;
            return (
              <RewardsCard key={item.id} userPoint={userPoint} item={item} />
            );
          })}
        </UIWrapPanel>
      </UIContainer>
    </DashboardLayout>
  );
};
export default Rewards;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context?.locale ?? 'es', [
        'common',
        'reward',
      ])),
    },
  };
};
