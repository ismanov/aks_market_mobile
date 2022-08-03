export const BASE_ROUTES = {
  AUTH: 'AUTH',
  MAIN: 'MAIN',
} as const;

export const MAIN_ROUTES = {
  HOME: 'HOME',
  BASKET: 'BASKET',
  ORDERS: 'ORDERS',
  PROFILE: 'PROFILE',
} as const;

export const PRODUCTS_ROUTES = {
  PRODUCTS_LIST: 'PRODUCTS_LIST',
  DETAILS: 'DETAILS',
} as const;

export const BASKET_ROUTES = {
  BASKET: 'BASKET_LIST',
  CALCULATION: 'PAYMENT_ADD_CARD',
  PAYMENT: 'PAYMENT',
};

export const LOGIN_ROUTES = {
  REGISTRATION: 'REGISTRATION',
  CONFIRMATION: 'CONFIRMATION',
} as const;

type valueOf<T> = T[keyof T];

export type BaseRoutes = valueOf<typeof BASE_ROUTES>;
export type LoginRoutes = valueOf<typeof LOGIN_ROUTES>;
export type MainRoutes = valueOf<typeof MAIN_ROUTES>;
export type BasketRoutes = valueOf<typeof BASKET_ROUTES>;

export type AllRoutes = BaseRoutes | LoginRoutes | MainRoutes | BasketRoutes;
