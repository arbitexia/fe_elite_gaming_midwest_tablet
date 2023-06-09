import { useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { UIImage } from '@/components/UI';
import { languageMenuItems } from '@/_mock/checkin';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const AppLanguageSelector = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(
    null
  );
  const isLanguageMenuOpen = Boolean(anchorElLanguage);
  return (
    <Box sx={{ position: 'absolute', left: '75px', top: '75px' }}>
      <Button
        disableElevation
        onClick={(e) => {
          setAnchorElLanguage(e.currentTarget);
        }}
        startIcon={
          <UIImage
            src={`images/icons/${i18n.language}.svg`}
            width={24}
            height={24}
          />
        }
      >
        <Typography
          sx={{
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '21px',
            color: '#83A9A8',
            textTransform: 'none',
          }}
        >
          {i18n.language === 'en' ? 'English' : 'Español'}
        </Typography>
      </Button>
      <Menu
        PaperProps={{
          elevation: 0,
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        anchorEl={anchorElLanguage}
        open={isLanguageMenuOpen}
        onClose={() => {
          setAnchorElLanguage(null);
        }}
        onClick={() => {
          router.push(router.asPath, undefined, {
            locale: i18n.language === 'en' ? 'es' : 'en',
          });
          setAnchorElLanguage(null);
        }}
      >
        {languageMenuItems.map((languageItem, index) => (
          <MenuItem key={index}>
            <Box sx={{ borderRadius: '50%' }}>
              <UIImage src={languageItem.icon} width={24} height={24} />
            </Box>
            <Typography
              sx={{
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '21px',
                color: '#83A9A8',
                textTransform: 'none',
                marginLeft: '8px',
              }}
            >
              {languageItem.text}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default AppLanguageSelector;
