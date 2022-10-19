import { useState } from 'react';
import { Button, Box, Paper, Menu, MenuItem, Typography } from '@mui/material';
// import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import {
  UIContainer,
  UIFlexCenterBox,
  UIFlexColumnBox,
  UIFlexWrapBox,
  UIImage,
  UIDefaultButton,
} from '@/components/UI';
import { languageMenuItems } from '@/_mock/checkin';
import { useSelectedLanguage, LanguageSwitcher } from 'next-export-i18n';

const Home: NextPage = () => {
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(
    null
  );
  const { lang } = useSelectedLanguage();
  const isLanguageMenuOpen = Boolean(anchorElLanguage);
  // const handleLogin = () => {
  //   router.push('/login');
  // };

  return (
    <UIContainer
      sx={{
        height: '100vh',
        background:
          'linear-gradient(0deg, rgba(6, 27, 47, 0.25), rgba(6, 27, 47, 0.25)), url("../images/back.png")',
      }}
    >
      <UIFlexCenterBox sx={{ height: '100%' }}>
        <Paper
          elevation={0}
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            minWidth: '1160px',
            minHeight: '770px',
            borderRadius: '30px',
            border: 'solid 2px rgba(137, 200, 198, 0.05)',
          }}
        >
          <UIFlexWrapBox sx={{ height: '770px' }}>
            <UIFlexColumnBox
              width="49%"
              sx={{ position: 'relative', height: '100%' }}
            >
              <Box sx={{ position: 'absolute', left: '75px', top: '75px' }}>
                <Button
                  disableElevation
                  onClick={(e) => {
                    setAnchorElLanguage(e.currentTarget);
                  }}
                  startIcon={
                    <UIImage
                      src={`images/icons/${lang}.svg`}
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
                    {lang === 'en' ? 'English' : 'Spain'}
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
                    setAnchorElLanguage(null);
                  }}
                >
                  {languageMenuItems.map((languageItem, index) => (
                    <LanguageSwitcher key={index} lang={languageItem.key}>
                      <MenuItem>
                        <Box sx={{ borderRadius: '50%' }}>
                          <UIImage
                            src={languageItem.icon}
                            width={24}
                            height={24}
                          />
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
                    </LanguageSwitcher>
                  ))}
                </Menu>
              </Box>
              <UIFlexColumnBox>
                <UIImage
                  src={'images/icons/logo.svg'}
                  width={290}
                  height={277}
                />
                <Typography
                  sx={{
                    width: '345px',
                    fontWeight: '600',
                    fontSize: '18px',
                    lineHeight: '160%',
                    textAlign: 'center',
                    color: '#6F918A',
                    paddingTop: '50px',
                  }}
                >
                  Maximizing Your Revenue by Providing the Most Detailed
                  Reporting
                </Typography>
              </UIFlexColumnBox>
            </UIFlexColumnBox>
            <UIFlexWrapBox sx={{ width: '410px', gap: 0 }}>
              <Box sx={{ mt: '115px', width: '100%' }}></Box>
              <Box sx={{ marginTop: '40px', width: '100%' }}></Box>

              <UIDefaultButton sx={{ mt: '50px' }}>Send Code</UIDefaultButton>
            </UIFlexWrapBox>
          </UIFlexWrapBox>
        </Paper>
      </UIFlexCenterBox>
    </UIContainer>
  );
};

export default Home;
