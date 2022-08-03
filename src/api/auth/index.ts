import {base_url} from 'api/constants';
import {Network} from 'api/network';
import {IConfirmationData, IUserData} from 'interfaces';

const instance = new Network(base_url);

export const registration = (body: IUserData): Promise<any> => {
  const url = 'auth/registration';
  return instance.httpPost({
    url,
    body,
  });
};

export const confirmation = (data: IConfirmationData): Promise<any> => {
  const url = 'auth/confirmPhone';
  return instance.httpPost({
    url,
    body: data,
  });
};
