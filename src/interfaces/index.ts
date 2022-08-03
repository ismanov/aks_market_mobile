export interface RequestConfig {
  url?: string;
  method?: string;
  baseURL?: string;
  headers?: any;
  config?: any;
  params?: any;
  data?: any;
  body?: any;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  socketPath?: string | null;
}

export type RootStackParamList = {
  Home: undefined;
  Categories: undefined;
  Products: {categoryId: string | undefined};
};

export interface IResponse {
  data?: any;
  status: number;
  statusText: string;
  headers: any;
  request?: any;
}

export interface IQueryParams {
  page?: number;
  size?: number;
  search?: string;
  limit?: number;
}

export interface IProductsQueryParams {
  categoryId?: string | undefined;
}

export interface IUserData {
  phone?: string;
  fullName?: string;
}

export interface IMainState {
  userId?: string;
  userData?: IUserData;
  verificationId?: string;
  loader: boolean;
  error?: string;
}

export interface IConfirmationData {
  verificationId: string;
  code: string;
}

export interface ICategory {
  name: string;
  _id: string;
}

export interface ICategoryState {
  categories?: Array<ICategory>;
  loader?: boolean;
  error?: string;
  page?: number;
  totalCategoriesCount?: number;
}

export interface IProduct {
  _id: string;
  fullName?: string;
  prices?: string[];
}

export interface IProductsState {
  products?: Array<IProduct>;
  product?: IProduct;
  loader?: boolean;
  page?: number;
  totalProductsCount?: number;
}
