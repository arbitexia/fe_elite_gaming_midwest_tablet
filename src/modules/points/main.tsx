import { useState } from 'react';
import { Box } from '@mui/material';
import PointsCard from './card';
import { UIImage } from '@/components/UI';
import { StyledArrowButton } from './ui';
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
    <Box
      sx={{
        position: 'relative',
        width: '50vw',
        height: 'calc(50vw / 615 * 390)',
        maxWidth: '615px',
        maxHeight: '390px',
        margin: '0',
        color: 'white',
        perspective: '1000px',
        transformOrigin: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transformOrigin: 'center',
          transformStyle: 'preserve-3d',
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
      </Box>
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
    </Box>
  );
};

export default PointsMain;
