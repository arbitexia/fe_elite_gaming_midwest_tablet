import { useAppToast } from '@/providers';
import {
  getProduct,
  getProducts,
  productSelector,
  resetProductMessage,
  setGalleries,
} from '@/redux/slices';

import { GetProductsParam, ProductType } from '@/types';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './redux';

export const useProduct = () => {
  const appToast = useAppToast();
  const {
    products,
    pageInfo,
    currentProduct,
    currentId,
    loading,
    message,
    error,
  } = useAppSelector(productSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading) return;
    if (message) appToast({ severity: 'success', message: message });
    if (error) appToast({ severity: 'error', message: error });
    dispatch(resetProductMessage(null));
  }, [loading]);

  const onGetProductById = (id: number) => {
    const product = products.find((product: ProductType) => product.id === id);
    dispatch(setGalleries(product?.gallery ?? []));
    return product;
  };

  const onProductSelect = async (id: number) => {
    await dispatch(getProduct(id));
  };

  const onGetProducts = async (param: GetProductsParam) => {
    await dispatch(getProducts(param));
  };

  return {
    products,
    currentProduct,
    pageInfo,
    currentId,
    onGetProductById,
    onProductSelect,
    onGetProducts,
  };
};
