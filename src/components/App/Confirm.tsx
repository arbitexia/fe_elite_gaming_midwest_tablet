import { useState, useEffect } from 'react';
import {
  Dialog,
  Typography,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';
import { UIFlexCenterBox, UIFlexWrapBox } from '../UI';

interface AppConfirmProps {
  open: boolean;
  handleYes: () => void;
  handleNo: () => void;
}

export const AppConfirm = ({ open, handleYes, handleNo }: AppConfirmProps) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!open) return;
    setValue(0);
    const timer = setInterval(() => {
      setValue((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 100 / 30
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [open]);

  useEffect(() => {
    if (value >= 100) handleNo();
  }, [value]);

  return (
    <Dialog
      open={open}
      onClose={handleYes}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        '.MuiPaper-root': {
          minWidth: '80%',
          minHeight: '60%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '30px',
          border: 'solid 2px rgba(137, 200, 198, 0.05)',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        },
      }}
    >
      <Box sx={{ position: 'absolute', right: '100px', top: '100px' }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant="determinate"
            value={value}
            size={65}
            sx={{ color: 'rgba(255, 255, 255, 0.4)' }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="caption"
              component="div"
              sx={{
                fontWeight: '500',
                fontSize: '24px',
                lineHeight: '36px',
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >{`${30 - Math.round((value * 30) / 100)}`}</Typography>
          </Box>
        </Box>
      </Box>
      <UIFlexCenterBox sx={{ height: '100%', flexDirection: 'column' }}>
        <Box>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '40px',
              lineHeight: '160%',
              textAlign: 'center',
              color: '#FFFFFF',
            }}
          >
            Do you need more time?
          </Typography>
        </Box>
        <UIFlexWrapBox sx={{ gap: '30px', mt: '60px' }}>
          <Button
            sx={{
              width: '200px',
              height: '68px',
              background: 'rgba(0, 0, 0, 0.2)',
              boxShadow: '0px 6.3px 10px rgba(0, 0, 0, 0.05)',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '30px',
              color: '#FFFFFF',
            }}
            onClick={() => handleYes()}
          >
            Yes
          </Button>
          <Button
            sx={{
              width: '200px',
              height: '68px',
              background: '#008A83',
              boxShadow: '0px 6.3px 10px rgba(0, 0, 0, 0.15)',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '30px',
              color: '#FFFFFF',
            }}
            onClick={() => handleNo()}
          >
            No
          </Button>
        </UIFlexWrapBox>
      </UIFlexCenterBox>
    </Dialog>
  );
};
