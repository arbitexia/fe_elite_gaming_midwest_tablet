import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  UIFlexSpaceBox,
  UISelectBox,
  UIImage,
  UIFlexWrapBox,
} from '@/components/UI';
import { StyledFilterBox, StyledPrevButton } from './ui';
import { Typography } from '@mui/material';
import { pointData } from '@/_mock/rewards';
import { useAuth, useLocation } from '@/hooks';
import { LocationType } from '@/types';
import { useSelectedLanguage, useTranslation } from 'next-export-i18n';

type DropboxType = {
  value: string;
  label: string;
};
type RewardHeaderProps = {
  setFilterLocation?: (locationId: number) => void;
  setFilterPoint?: (pointId: number) => void;
  isFilter?: boolean;
};
const RewardsHeader = ({
  setFilterLocation,
  setFilterPoint,
  isFilter = false,
}: RewardHeaderProps) => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const { id } = router.query;
  const { tabletLocation } = useAuth({});
  const { locations } = useLocation();
  const [locationData, setLocationData] = useState<DropboxType[]>([]);
  useEffect(() => {
    if (locations?.length > 0) {
      const filteredLocation = locations?.map((obj: LocationType) => {
        return { label: obj.name, value: obj.id.toString() };
      });
      setLocationData(filteredLocation);
    }
  }, [locations]);

  return (
    <UIFlexSpaceBox sx={{ mt: '30px' }}>
      {id ? (
        <StyledPrevButton
          onClick={() => {
            router.push({
              pathname: '/rewards',
              query: {
                ...(lang === 'es' && { lang }),
              },
            });
          }}
        >
          <UIImage src="images/icons/prev.svg" width={15} height={34} />
        </StyledPrevButton>
      ) : (
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '36px',
            lineHeight: '54px',
            alignItems: 'center',
            color: '#89C8C6',
          }}
        >
          {t('common.rewards')}
        </Typography>
      )}
      {isFilter && (
        <UIFlexWrapBox sx={{ gap: '30px' }}>
          <StyledFilterBox>
            <Typography>{t('reward.location')}</Typography>
            <UISelectBox
              items={locationData}
              onSelectChange={(value) => {
                setFilterLocation && setFilterLocation(+value);
              }}
              selectedDefaultValue={
                locations?.find((obj) => obj.id === tabletLocation?.id ?? 0)
                  ?.id ?? 0
              }
            />
          </StyledFilterBox>
          <StyledFilterBox>
            <Typography>{t('reward.points')}</Typography>
            <UISelectBox
              items={pointData}
              onSelectChange={(value) =>
                setFilterPoint && setFilterPoint(+value)
              }
            />
          </StyledFilterBox>
        </UIFlexWrapBox>
      )}
    </UIFlexSpaceBox>
  );
};
export default RewardsHeader;
