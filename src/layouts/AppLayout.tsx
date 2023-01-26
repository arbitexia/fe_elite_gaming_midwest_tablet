import React from 'react';
import { AppSEO } from '@/components/App';
import { Box } from '@mui/material';
import { UIAppLayoutWrapper } from '@/components/UI';

interface Props {
  bg?: string;
  title?: string;
  description?: string;
  children: React.ReactNode | React.ReactNode[];
}

const AppLayout = (props: Props) => {
  return (
    <UIAppLayoutWrapper sx={{ background: props.bg }}>
      <AppSEO title={props.title || ''} description={props.description || ''} />
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          background: 'url("/images/back.png")',
        }}
      >
        <video
          autoPlay
          loop
          muted
          id="video"
          style={{
            position: 'fixed',
            right: 0,
            bottom: 0,
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        >
          {/* <source src="/images/bg.mp4" type="video/mp4"></source> */}
        </video>
        {props.children}
      </Box>
    </UIAppLayoutWrapper>
  );
};

export default AppLayout;
