import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DashboardLayout } from '@/layouts';
import { UIContainer, UIFlexWrapBox } from '@/components/UI';
import { RewardsDetailHeader, RewardsFilterBox } from '@/modules/rewards';
import { PointType, ProductType } from '@/types';
import { Divider } from '@mui/material';
import { RewardDetailCard } from '@/modules/rewards/detailCard';
import { useProduct, usePoint } from '@/hooks';

const RewardsById = () => {
  const router = useRouter();
  const { id } = router.query;
  const { products } = useProduct();
  const { points } = usePoint();
  const [rewardItem, setRewardItem] = useState<ProductType | undefined | null>(
    null
  );

  const [myPoint, setMyPoint] = useState<PointType | undefined | null>(null);
  const [totalPoint, setTotalPoint] = useState(0);

  useEffect(() => {
    let sum = 0;
    points.forEach((x) => (sum += x.point));
    setTotalPoint(sum);
  }, [points]);

  useEffect(() => {
    setRewardItem(products.find((item) => item.id === parseInt(id as string)));
    setMyPoint(
      points.find(
        (item) => item.userLocation?.locationId === rewardItem?.locationId
      )
    );
  }, [id]);

  return (
    <DashboardLayout title={rewardItem ? rewardItem.name : 'Rewards'}>
      <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
        <RewardsDetailHeader />
        <Divider
          sx={{
            mt: '26px',
            borderColor: 'rgba(137, 200, 198, 0.5)',
          }}
        />
        <RewardsFilterBox totalPoint={totalPoint} />
        {rewardItem && (
          <UIFlexWrapBox
            sx={{
              mt: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(137, 200, 198, 0.2)',
              backdropFilter: 'blur(20px)',
              borderRadius: '30px',
              padding: '25px 30px',
            }}
          >
            <RewardDetailCard
              rewardItem={rewardItem}
              myPoint={myPoint?.point}
            />
          </UIFlexWrapBox>
        )}
      </UIContainer>
    </DashboardLayout>
  );
};

export default RewardsById;
