import { Divider } from '@mui/material';
import { UIContainer, UIWrapPanel } from '@/components/UI';
import {
  RewardsHeader,
  RewardsPointsBox,
  RewardsCard,
} from '@/modules/rewards';
import { DashboardLayout } from '@/layouts';
import { rewardsData } from '@/_mock/rewards';

const Rewards = () => {
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
        <UIWrapPanel itemSpacing={40} paddingY={60}>
          {rewardsData.map((item) => {
            return <RewardsCard key={item.id} point={29000} item={item} />;
          })}
        </UIWrapPanel>
      </UIContainer>
    </DashboardLayout>
  );
};
export default Rewards;
