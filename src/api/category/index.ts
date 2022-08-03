import {base_url} from 'api/constants';
import {Network} from 'api/network';
import {IQueryParams} from 'interfaces';

const instance = new Network(base_url);

export const getCategoryList = (params: IQueryParams): Promise<any> => {
  const url = 'categories';
  return instance.httpGet({
    url,
    params,
  });
};
