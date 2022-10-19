import { styled, TextField } from '@mui/material';

export const UIDefaultTextField = styled(TextField)({
  width: 408,
  background: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(114, 239, 232, 0.2)',
  borderRadius: '12px',
  height: '68px',
  justifyContent: 'center',
  '.MuiTextField-root': {
    '&:focus-visible': {
      outline: 'none',
    },
  },
  '.MuiOutlinedInput-input': {
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '27px',
    padding: '12.5px 25px',
    border: 'none',
    outline: 'none',
    color: 'white',
    '::placeholder': {
      color: 'rgba(131, 169, 168, 0.5)',
    },
    '&:focus-visible': {
      border: 'none',
    },
  },

  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  '.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});
