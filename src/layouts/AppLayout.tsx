import React from 'react';
import { AppSEO } from '@/components/App';
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
      {props.children}
    </UIAppLayoutWrapper>
  );
};

export default AppLayout;
