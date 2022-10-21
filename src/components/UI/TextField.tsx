import { styled, TextField, InputAdornment, MenuItem } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

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
    // padding: '12.5px 25px',
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

export type UISearchBoxProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const UISearchBox = ({ value, onChange }: UISearchBoxProps) => {
  return (
    <UIDefaultTextField
      id="input-with-icon-textfield"
      placeholder="Search"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment sx={{ color: '#B7B7B7' }} position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        '.MuiOutlinedInput-input': {
          '::placeholder': { color: 'white' },
        },
        width: '280px',
        height: '42px',
        background: 'rgba(137, 200, 198, 0.15)',
        border: '1px solid rgba(193, 191, 225, 0.05)',
        borderRadius: '20px',
      }}
    />
  );
};

export type UISelectBoxProps = {
  items: { value: string; label: string }[];
};

export const UISelectBox = ({ items }: UISelectBoxProps) => {
  return (
    <UIDefaultTextField
      id="input-with-icon-textfield"
      placeholder="Search"
      select
      sx={{
        '.MuiOutlinedInput-input': {
          '::placeholder': { color: 'white' },
        },
        background: 'rgba(193, 191, 225, 0.26)',
        width: '190px',
        height: '42px',
        border: '1px solid rgba(137, 200, 198, 0.15)',
        borderRadius: '20px',
      }}
    >
      {items.map((item) => {
        return (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        );
      })}
    </UIDefaultTextField>
  );
};
