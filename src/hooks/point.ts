import { useAppToast } from '@/providers';
import {
  getPoints,
  sendEmailCustomer,
  resetPointMessage,
  pointSelector,
} from '@/redux/slices';

import { CustomerEmailParam, GetPointParam } from '@/types';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './redux';

export const usePoint = () => {
  const appToast = useAppToast();
  const { points, loading, message, error } = useAppSelector(pointSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading) return;
    if (message) appToast({ severity: 'success', message: message });
    if (error) appToast({ severity: 'error', message: error });
    dispatch(resetPointMessage(null));
  }, [loading]);

  const onGetPoints = async (param: GetPointParam) => {
    await dispatch(getPoints(param));
  };

  const onGetPointCount = () => {
    if (points && points.length <= 0) {
      return 0;
    }
    const totalCount = points?.map((p) => p.point).reduce((a, b) => a + b) ?? 0;
    return totalCount;
  };

  const onSendEmailCustomer = async (param: CustomerEmailParam) => {
    await dispatch(sendEmailCustomer(param));
  };

  return {
    points,
    onGetPoints,
    onGetPointCount,
    onSendEmailCustomer,
  };
};
