import api from 'api';
import {IQueryParams} from 'interfaces';
import {Alert} from 'react-native';
import {
  setCategories,
  setLoader,
  setPage,
  setTotalCategoriesCount,
} from 'stores/slices/category-slice';

import {AppDispatch} from 'stores/store';

export const getCategories =
  (search?: string, searching?: boolean) =>
  (dispatch: AppDispatch, getState: any) => {
    const {page, categories} = getState().categoryState;
    const params: IQueryParams = {search, limit: 30, page: undefined};
    if (page && !searching) {
      params.page = Number(page) + 1;
    }
    dispatch(setLoader(true));
    api.category
      .getCategoryList(params)
      .then(async (res: any) => {
        if (res) {
          console.log(res.total);

          res.page &&
            res.page !== page &&
            dispatch(
              setCategories([...(searching ? [] : categories), ...res.data]),
            );
          res.page && dispatch(setPage(res.page));
          res.total && dispatch(setTotalCategoriesCount(res.total));
        }
      })
      .catch(e => {
        Alert.alert('Error', String(e.message));
        console.log(e);
      })
      .finally(() => dispatch(setLoader(false)));
  };
