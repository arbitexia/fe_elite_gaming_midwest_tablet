import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DashboardLayout } from '@/layouts';
import { UIContainer, UIFlexWrapBox, UIImage } from '@/components/UI';
import { RewardsHeader, RewardsPointsBox } from '@/modules/rewards';
import { rewardsData } from '@/_mock/rewards';
import { RewardItemType } from '@/types';
import { Divider, Box } from '@mui/material';
import { RewardsInfoBox } from '@/modules/rewards/rewardsInfo';

const RewardsById = () => {
  const router = useRouter();
  const { id } = router.query;
  const [rewardItem, setRewardItem] = useState<
    RewardItemType | undefined | null
  >(null);
  useEffect(() => {
    setRewardItem(
      rewardsData.find((item) => item.id === parseInt(id as string))
    );
  }, [id]);

  return (
    <DashboardLayout title="My Points">
      <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
        <RewardsHeader />
        <Divider
          sx={{
            mt: '26px',
            borderColor: 'rgba(137, 200, 198, 0.5)',
          }}
        />
        <RewardsPointsBox />
        {rewardItem && (
          <UIFlexWrapBox
            sx={{
              mt: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(137, 200, 198, 0.2)',
              backdropFilter: 'blur(20px)',
              borderRadius: '30px',
              padding: '25px 30px',
              gap: '90px',
            }}
          >
            <UIImage src={rewardItem.url} width={477} height={510} />
            <Box mt="35px">
              <RewardsInfoBox rewardItem={rewardItem} myPoint={29000} />
            </Box>
          </UIFlexWrapBox>
        )}
      </UIContainer>
    </DashboardLayout>
  );
};

export default RewardsById;
