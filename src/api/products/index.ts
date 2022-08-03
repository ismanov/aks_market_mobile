import {IProductsQueryParams} from './../../interfaces/index';
import {base_url} from 'api/constants';
import {Network} from 'api/network';
import {IQueryParams} from 'interfaces';

const instance = new Network(base_url);

export const getProductsList = (
  params: IQueryParams & IProductsQueryParams,
): Promise<any> => {
  const url = 'products';
  return instance.httpGet({
    url,
    params,
  });
};
