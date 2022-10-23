import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { Box } from '@mui/material';

export type RewardsCardProgressProps = {
  myPoint: number;
  itemPoint: number;
};

export const RewardsCardProgress = ({
  myPoint,
  itemPoint,
}: RewardsCardProgressProps) => {
  return (
    <UIFlexWrapBox
      sx={{
        mt: '18px',
        background: 'rgba(137, 200, 198, 0.3)',
        border: '1px solid rgba(47, 16, 16, 0.05)',
        backdropFilter: 'blur(95.4109px)',
        borderRadius: '15px',
        width: '100%',
        height: '30px',
        padding: '3px',
        position: 'relative',
      }}
    >
      <UIFlexWrapBox
        sx={{
          background:
            myPoint >= itemPoint / 2
              ? 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)'
              : 'rgba(82, 192, 199, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '11px',
          width:
            myPoint >= itemPoint ? '100%' : `${(myPoint / itemPoint) * 100}%`,
          height: '100%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          right: -10,
          top: -5,
          filter:
            myPoint >= itemPoint
              ? 'drop-shadow(0px 5.60991px 8.41486px rgba(234, 176, 32, 0.4))'
              : 'none',
        }}
      >
        <UIImage
          src={`images/icons/star-${
            myPoint >= itemPoint ? 'light' : 'dark'
          }.svg`}
          width={36}
          height={36}
        />
      </Box>
    </UIFlexWrapBox>
  );
};
