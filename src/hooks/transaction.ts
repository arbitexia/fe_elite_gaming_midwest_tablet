import { useEffect } from 'react';
import { useAppToast } from '@/providers';
import {
  createTransaction,
  resetTransactionMessage,
  transactionSelector,
  requestCouponTransaction,
} from '@/redux/slices';
import { TransactionType } from '@/types';
import { useAppSelector, useAppDispatch } from './redux';

export const useTransaction = () => {
  const appToast = useAppToast();
  const { loading, message, error } = useAppSelector(transactionSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading) return;
    if (message) appToast({ severity: 'success', message: message });
    if (error) appToast({ severity: 'error', message: error });
    dispatch(resetTransactionMessage(null));
  }, [loading]);

  const onCreateTransaction = async (param: TransactionType.Body) => {
    await dispatch(createTransaction(param));
  };

  const onRequestCouponTransaction = async (
    param: TransactionType.CouponBody
  ) => {
    await dispatch(requestCouponTransaction(param));
  };

  return {
    onCreateTransaction,
    onRequestCouponTransaction,
  };
};
