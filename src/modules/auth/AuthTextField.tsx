import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
  UIFlexWrapBox,
  UINumberButton,
  UIBackButton,
  UIImage,
} from '@/components/UI';
import { buttons } from '@/_mock/checkin';

export type UIAuthTextFieldProps = {
  placeholder: string;
  mask: string;
  isVerify?: boolean;
};

export const AuthTextField = ({
  placeholder,
  mask,
  isVerify,
}: UIAuthTextFieldProps) => {
  const [value, setValue] = useState('');
  const keyCount = isVerify
    ? (mask.match(/_/g) || []).length
    : (mask.match(/X/g) || []).length;
  const onButtonClick = (key: string) => {
    if (key === 'back') setValue(value.slice(0, value.length - 1));
    else if (key !== '+' && value.length < keyCount) setValue(`${value}${key}`);
  };

  const applyFormatMask = (str: string) => {
    let formattedString = '';
    let numberPos = 0;
    for (let j = 0; j < mask.length; j++) {
      const currentMaskChar = mask[j];
      if (currentMaskChar == (isVerify ? '_' : 'X') && str.charAt(numberPos)) {
        formattedString += str.charAt(numberPos);
        numberPos++;
      } else {
        formattedString += currentMaskChar;
      }
    }
    return formattedString;
  };
  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          height: '100px',
          background: 'rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(114, 239, 232, 0.2)',
          borderRadius: '12px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            fontWeight: isVerify && value.length > 0 ? '500' : '400',
            fontSize: isVerify && value.length > 0 ? '42px' : '22px',
            letterSpacing: isVerify && value.length > 0 ? '37px' : '100%',
            lineHeight: isVerify && value.length > 0 ? '63px' : '33px',
            textAlign: 'center',
            width: '290px',
            color: value.length > 0 ? 'white' : 'rgba(131, 169, 168, 0.5)',
          }}
        >
          {value.length > 0 ? applyFormatMask(value) : placeholder}
        </Typography>
      </Box>
      <UIFlexWrapBox sx={{ mt: '30px', gap: '15px' }}>
        {buttons.map((key, index) => {
          if (key !== 'back')
            return (
              <UINumberButton key={index} onClick={() => onButtonClick(key)}>
                {key}
              </UINumberButton>
            );
          else
            return (
              <UIBackButton key={index} onClick={() => onButtonClick(key)}>
                <UIImage src="images/icons/back.svg" width={25} height={20} />
              </UIBackButton>
            );
        })}
      </UIFlexWrapBox>
    </Box>
  );
};
