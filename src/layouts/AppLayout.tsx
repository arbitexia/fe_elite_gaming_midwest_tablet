import React from 'react';
import { CssBaseline } from '@mui/material';
import { AppSEO } from '@/components/App';
import { UIAppLayoutWrapper, UIContainer } from '@/components/UI';

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
      <CssBaseline />
      <UIContainer sx={{ py: 3 }}>{props.children}</UIContainer>
    </UIAppLayoutWrapper>
  );
};

export default AppLayout;
