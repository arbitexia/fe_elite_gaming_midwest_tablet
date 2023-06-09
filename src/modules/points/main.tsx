import { useState, useEffect } from 'react';
import PointsCard from './card';
import { Typography } from '@mui/material';
import { UIImage } from '@/components/UI';
import {
  StyledArrowButton,
  StyledPointsCardArea,
  StyledAnimationBox,
  StyledSendButton,
} from './ui';
import { PointType } from '@/types';
import { useAuth } from '@/hooks';
import { useTranslation } from 'next-i18next';

interface PointsMainProps {
  points: PointType[];
}

const PointsMain = ({ points }: PointsMainProps) => {
  const { t } = useTranslation(['common']);
  const { tabletLocation } = useAuth({});
  const [currDeg, setCurrDeg] = useState(0);
  const [second, setSecond] = useState(1);
  const rotateAngle = 360 / (points.length == 0 ? 1 : points.length);
  const index = points.findIndex(
    (x) => x.userLocation?.locationId == tabletLocation?.id
  );

  useEffect(() => {
    if (index >= 0) {
      setCurrDeg(rotateAngle * index);
    }
  }, [index]);

  const handleNext = () => {
    if (currDeg - rotateAngle <= -360) {
      setSecond(0);
      setCurrDeg(rotateAngle);
      setTimeout(() => {
        setSecond(1);
        setCurrDeg((prev) => prev - rotateAngle);
      }, 100);
    } else {
      setTimeout(() => {
        setSecond(1);
        setCurrDeg((prev) => prev - rotateAngle);
      }, 100);
    }
  };
  const handlePrev = () => {
    if (currDeg + rotateAngle >= 360) {
      setSecond(0);
      setCurrDeg(-rotateAngle);
      setTimeout(() => {
        setSecond(1);
        setCurrDeg((prev) => prev + rotateAngle);
      }, 100);
    } else {
      setTimeout(() => {
        setSecond(1);
        setCurrDeg((prev) => prev + rotateAngle);
      }, 100);
    }
  };
  return (
    <>
      <StyledPointsCardArea>
        <StyledAnimationBox
          sx={{
            transform: `translateZ(-30vw) rotateY(${currDeg}deg)`,
            transition: `transform ${second}s`,
          }}
        >
          {points.map((item, index) => {
            return (
              <PointsCard
                key={index}
                index={index}
                deg={rotateAngle}
                item={item}
              />
            );
          })}
        </StyledAnimationBox>
        <StyledArrowButton
          sx={{
            left: 'calc(140% - 34px)',
          }}
          onClick={handleNext}
        >
          <UIImage src="images/icons/next.svg" width={30} height={52} />
        </StyledArrowButton>
        <StyledArrowButton
          sx={{
            left: 'calc(-40% - 34px)',
          }}
          onClick={handlePrev}
        >
          <UIImage src="images/icons/prev.svg" width={30} height={52} />
        </StyledArrowButton>
      </StyledPointsCardArea>
      <StyledSendButton>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '30px',
            color: '#FAFF00',
            WebkitTextStroke: '1px rgba(19, 90, 86, 0.56)',
          }}
        >
          {t('send-email')}
        </Typography>
      </StyledSendButton>
    </>
  );
};

export default PointsMain;
