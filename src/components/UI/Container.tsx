import { styled, Container, ContainerProps, Toolbar } from '@mui/material';

const UIContentWrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2, 6),
  gap: theme.spacing(3),
  width: '100%',
}));

export const UIContainer = ({ children, ...rest }: ContainerProps) => {
  return (
    <UIContentWrapper maxWidth="xl" {...rest}>
      <Toolbar sx={{ height: '86px' }} />
      {children}
    </UIContentWrapper>
  );
};
