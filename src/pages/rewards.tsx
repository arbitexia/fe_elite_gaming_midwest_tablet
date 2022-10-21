import { Divider } from '@mui/material';
import { UIContainer, UIFlexWrapBox } from '@/components/UI';
import {
  RewardsHeader,
  RewardsFilterBox,
  RewardsCard,
} from '@/modules/rewards';
import { DashboardLayout } from '@/layouts';
import { rewardsItems } from '@/_mock/rewards';

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
        <RewardsFilterBox />
        <UIFlexWrapBox sx={{ gap: '40px', py: '60px' }}>
          {rewardsItems.map((item) => {
            return <RewardsCard key={item.id} point={29000} item={item} />;
          })}
        </UIFlexWrapBox>
      </UIContainer>
    </DashboardLayout>
  );
};
export default Rewards;
