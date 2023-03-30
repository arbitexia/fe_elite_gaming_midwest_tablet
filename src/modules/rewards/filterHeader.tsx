// import { useState } from 'react';
import { useRouter } from 'next/router';
import { UIFlexSpaceBox, UISelectBox, UIFlexWrapBox } from '@/components/UI';
import { StyledFilterBox } from './ui';
import { Typography } from '@mui/material';
import { pointData } from '@/_mock/rewards';
import { useLocation } from '@/hooks';
import { useEffect, useState } from 'react';
import { LocationMenuItemType } from '@/types';
interface RewardsFilterHeaderProps {
  searchPoint?: number;
  searchLocation?: number;
  onPointChange: (value: number) => void;
  onLocationChange: (value: number) => void;
}

const RewardsFilterHeader = ({
  searchPoint,
  searchLocation,
  onPointChange,
  onLocationChange,
}: RewardsFilterHeaderProps) => {
  const { locations, onGetLocations } = useLocation();
  const [locationListItems, setLocationListItems] = useState<
    LocationMenuItemType[]
  >([]);
  const router = useRouter();

  useEffect(() => {
    onGetLocations({ filterBy: { search: '' } });
  }, [router.isReady]);

  useEffect(() => {
    let list = [{ value: '0', label: 'any' }];
    list = list.concat(
      locations.map((x) => {
        return { value: `${x.id}`, label: x.name } as LocationMenuItemType;
      })
    );
    setLocationListItems(list);
  }, [locations]);

  return (
    <UIFlexSpaceBox sx={{ mt: '30px' }}>
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '36px',
          lineHeight: '54px',
          alignItems: 'center',
          color: '#89C8C6',
        }}
      >
        Rewards
      </Typography>
      <UIFlexWrapBox sx={{ gap: '30px' }}>
        <StyledFilterBox>
          <Typography>Location</Typography>
          <UISelectBox
            items={locationListItems}
            defaultValue={searchLocation}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onLocationChange(parseInt(e.target.value))
            }
          />
        </StyledFilterBox>
        <StyledFilterBox>
          <Typography>Points</Typography>
          <UISelectBox
            items={pointData}
            defaultValue={searchPoint}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onPointChange(parseInt(e.target.value))
            }
          />
        </StyledFilterBox>
      </UIFlexWrapBox>
    </UIFlexSpaceBox>
  );
};
export default RewardsFilterHeader;
