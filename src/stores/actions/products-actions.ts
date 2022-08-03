import {IProductsQueryParams} from './../../interfaces/index';
import api from 'api';
import {IQueryParams} from 'interfaces';
import {Alert} from 'react-native';
import {
  setProducts,
  setLoader,
  setPage,
  setTotalProductsCount,
} from 'stores/slices/products-slice';

import {AppDispatch} from 'stores/store';

export const getProducts =
  (filter: IQueryParams & IProductsQueryParams, searching?: boolean) =>
  (dispatch: AppDispatch, getState: any) => {
    const {page, products} = getState().productsState;
    const params: IQueryParams = {...filter, limit: 30, page: undefined};
    if (page && !searching) {
      params.page = Number(page) + 1;
    }
    dispatch(setLoader(true));
    api.products
      .getProductsList(params)
      .then(async (res: any) => {
        if (res) {
          console.log(res);

          res.page &&
            res.page !== page &&
            dispatch(
              setProducts([...(searching ? [] : products), ...res.data]),
            );
          res.page && dispatch(setPage(res.page));
          res.total && dispatch(setTotalProductsCount(res.total));
        }
      })
      .catch(e => {
        Alert.alert('Error', String(e.message));
        console.log(e);
      })
      .finally(() => dispatch(setLoader(false)));
  };
