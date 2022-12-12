import { useState } from 'react';
import PointsCard from './card';
import { Typography } from '@mui/material';
import { UIImage } from '@/components/UI';
import {
  StyledArrowButton,
  StyledPointsCardArea,
  StyledAnimationBox,
  StyledSendButton,
} from './ui';
import { locationData } from '@/_mock/points';

const PointsMain = () => {
  const [currDeg, setCurrDeg] = useState(0);
  const [second, setSecond] = useState(1);
  const rotateAngle = 360 / locationData.length;
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
          {locationData.map((item, index) => {
            return (
              <PointsCard
                key={item.id}
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
          Send Email
        </Typography>
      </StyledSendButton>
    </>
  );
};

export default PointsMain;
