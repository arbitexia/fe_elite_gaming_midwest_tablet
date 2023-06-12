import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UIAppLayoutWrapper } from '@/components/UI';
import { Box } from '@mui/material';
import { AppSEO, AppNavbar } from '@/components/App';
import { useAuth } from '@/hooks/auth';
import { useAppLockScreen } from '@/providers';
import { useSelectedLanguage } from 'next-export-i18n';

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

function DashboardLayout(props: Props) {
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const isPointPage = router.pathname.includes('/points');
  const { isTabletAuthenticated, isUserAuthenticated } = useAuth({});
  const appLockScreen = useAppLockScreen();
  useEffect(() => {
    if (!isTabletAuthenticated) appLockScreen();
    if (!isUserAuthenticated) {
      router.push({
        pathname: '/',
        query: {
          ...(lang === 'es' && { lang }),
        },
      });
    }
  }, [isTabletAuthenticated, isUserAuthenticated, router]);
  return (
    <UIAppLayoutWrapper>
      <Box
        sx={{
          minHeight: '100vh',
          background: isPointPage
            ? 'url("../images/Stars.png"), radial-gradient(166.33% 97.17% at 85.18% 5.81%, rgba(0, 255, 148, 0.16) 0%, rgba(255, 255, 255, 0.002) 100%), radial-gradient(97.73% 173.91% at -3.15% 77.15%, rgba(14, 71, 112, 0.2) 0%, rgba(24, 77, 89, 0.2) 23.15%, rgba(17, 54, 81, 0) 100%), #001817'
            : 'url("../images/Stars.png"), radial-gradient(166.33% 97.17% at 85.18% 5.81%, rgba(0, 255, 148, 0.16) 0%, rgba(255, 255, 255, 0.002) 100%), radial-gradient(97.73% 173.91% at -3.15% 77.15%, rgba(14, 71, 112, 0.2) 0%, rgba(24, 77, 89, 0.2) 23.15%, rgba(17, 54, 81, 0) 100%), #000D18',
        }}
      >
        <AppSEO title={props.title} description="" />
        <AppNavbar />
        {props.children}
      </Box>
    </UIAppLayoutWrapper>
  );
}

export default DashboardLayout;
