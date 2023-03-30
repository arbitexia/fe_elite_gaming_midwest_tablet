import { UIFlexWrapBox } from '@/components/UI';
import { ProductType } from '@/types';
import { Box, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { RewardsInfoBox } from './rewardsInfo';

export interface RewardDetailCardProps {
  rewardItem: ProductType;
  myPoint: number | undefined;
}

export const RewardDetailCard = ({
  rewardItem,
  myPoint,
}: RewardDetailCardProps) => {
  return (
    <UIFlexWrapBox
      sx={{
        gap: '90px',
      }}
    >
      <Box sx={{ width: '477px' }}>
        <Carousel navButtonsAlwaysVisible sx={{ height: '450px' }}>
          {rewardItem.gallery?.map((item) => {
            if (item.asset) {
              return (
                <Box
                  component="img"
                  src={`/${item.asset.url}`}
                  alt={'carousel'}
                  key={item.asset.url}
                  sx={{
                    width: '477px',
                    height: '415px',
                    objectFit: 'contain',
                    borderRadius: '12px',
                  }}
                />
              );
            }
          })}
        </Carousel>
      </Box>
      <Box mt="35px">
        <RewardsInfoBox rewardItem={rewardItem} myPoint={myPoint ?? 0} />
        <Button
          sx={{
            mt: '40px',
            background:
              'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
            border: '1px solid rgba(191, 215, 225, 0.05)',
            borderRadius: '12px',
            fontWeight: '500',
            fontSize: '24px',
            lineHeight: '36px',
            color: '#FFFFFF',
            width: '310px',
            height: '68px',
            textTransform: 'none',
          }}
        >
          Exchange Offer
        </Button>
      </Box>
    </UIFlexWrapBox>
  );
};
