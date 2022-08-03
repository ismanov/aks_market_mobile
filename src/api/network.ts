import {RequestConfig} from 'interfaces';
import {methods} from 'api/constants';
import {makeQueryParams} from 'api/helpers';

export class Network {
  readonly appJsonContentType = {
    'Content-Type': 'application/json',
  };

  constructor(
    private baseUrl: string,
    private readonly config?: RequestConfig,
  ) {}

  httpGet({url, params, config}: RequestConfig) {
    return new Promise((resolve, reject) =>
      fetch(this.baseUrl + url + makeQueryParams(params), {
        method: methods.GET,
        headers: {...this.appJsonContentType, ...this.config, ...config},
      })
        .then(res => resolve(res.json()))
        .catch(error => reject(error)),
    );
  }

  httpPost({url, body, config}: RequestConfig) {
    return new Promise((resolve, reject) =>
      fetch(this.baseUrl + url, {
        method: methods.POST,
        headers: {...this.appJsonContentType, ...this.config, ...config},
        body: JSON.stringify(body),
      })
        .then(res => {
          resolve(res.json());
        })
        .catch(error => reject(error)),
    );
  }

  httpPut({url, body, config}: RequestConfig) {
    return new Promise((resolve, reject) =>
      fetch(this.baseUrl + url, {
        method: methods.PUT,
        headers: {...this.appJsonContentType, ...this.config, ...config},
        body: JSON.stringify(body),
      })
        .then(res => resolve(res.json()))
        .catch(error => reject(error)),
    );
  }
}
