import { useAppToast } from '@/providers';
import { useAppSelector, useAppDispatch } from './redux';

export const useLocation = () => {
  const appToast = useAppToast();
  const dispatch = useAppDispatch();
};
