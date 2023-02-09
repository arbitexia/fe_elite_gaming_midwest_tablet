import { Divider } from '@mui/material';
import { UIContainer, UIWrapPanel } from '@/components/UI';
import {
  RewardsCard,
  RewardsFilterBox,
  RewardsFilterHeader,
} from '@/modules/rewards';
import { DashboardLayout } from '@/layouts';
import { useProduct, usePoint } from '@/hooks';
import { pointData } from '@/_mock/rewards';
import { GetProductsParam, ProductType } from '@/types';
import { useEffect, useState } from 'react';

const Rewards = () => {
  const { products, onGetProducts } = useProduct();
  const { points } = usePoint();
  const [rewardList, setRewardList] = useState<ProductType[]>([]);
  const [searchPoint, setSearchPoint] = useState(0);
  const [searchLocation, setSearchLocation] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  useEffect(() => {
    let sum = 0;
    points.forEach((x) => (sum += x.point));
    setTotalPoint(sum);
  }, [points]);

  useEffect(() => {
    setRewardList(products);
  }, [products]);

  useEffect(() => {
    handleSearch();
  }, [searchPoint, searchLocation]);

  const handleSearch = () => {
    let params: GetProductsParam = { filterBy: {} };
    //if (!searchLocation) {
    params.filterBy.location = searchLocation;
    //}
    if (searchPoint) {
      params.filterBy.pointFrom = pointData[searchPoint].from;
    }
    if (searchPoint && searchPoint != pointData.length - 1) {
      params.filterBy.pointTo = pointData[searchPoint].to;
    }
    onGetProducts(params);
  };
  return (
    <DashboardLayout title="Rewards">
      <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
        <RewardsFilterHeader
          searchPoint={searchPoint}
          searchLocation={searchLocation}
          onPointChange={(value: number) => setSearchPoint(value)}
          onLocationChange={(value: number) => setSearchLocation(value)}
        />
        <Divider
          sx={{
            mt: '26px',
            borderColor: 'rgba(137, 200, 198, 0.5)',
          }}
        />
        <RewardsFilterBox totalPoint={totalPoint} />
        <UIWrapPanel itemSpacing={40} paddingY={60}>
          {rewardList.map((item) => {
            let myPoint = points.find(
              (x) => x.userLocation?.locationId == item.locationId
            );
            return (
              <RewardsCard
                key={item.id}
                point={myPoint?.point ?? 0}
                item={item}
              />
            );
          })}
        </UIWrapPanel>
      </UIContainer>
    </DashboardLayout>
  );
};
export default Rewards;
