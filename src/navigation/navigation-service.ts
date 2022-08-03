import React from 'react';
import {AllRoutes} from './routes';
import {
  NavigationContainerRef,
  CommonActions,
  NavigationState,
  PartialState,
  StackActions,
} from '@react-navigation/native';
import logger from 'utils/logger';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const isReadyNavigation = {
  current: false,
};

type NavigationParams = {
  screen: AllRoutes;
  params?: object;
};

type ResetParams = {
  index: number;
  routes: {name: AllRoutes}[];
};

const navigate = (name: AllRoutes, params?: NavigationParams) => {
  if (isReadyNavigation.current && navigationRef.current) {
    // @ts-ignore
    navigationRef.current.navigate(name, params);
  } else {
    logger.log('Navigation not init');
  }
};

const push = (name: AllRoutes, params?: NavigationParams) => {
  if (isReadyNavigation.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(name, params));
  } else {
    logger.log('Navigation not init');
  }
};

const getActiveRouteName = (): string => {
  const state = navigationRef.current?.getRootState();
  let routeName = '';
  if (state?.routes) {
    routeName = getActiveRouteNameFromState(state);
  }
  return routeName;
};

const getActiveRouteNameFromState = (
  state: NavigationState | PartialState<NavigationState>,
): string => {
  if (!state.routes) {
    return '';
  }

  const route = state.routes[state.index!];

  if (route.state) {
    return getActiveRouteNameFromState(route.state);
  }

  return route.name;
};

const reset = (params: ResetParams) =>
  navigationRef.current?.dispatch(CommonActions.reset(params));

const resetRoot = () => {
  navigationRef.current?.resetRoot();
};

const setParams = (params: object) => {
  navigationRef.current?.dispatch(CommonActions.setParams(params));
};

const goBack = () => navigationRef.current?.dispatch(CommonActions.goBack());

export default {
  getActiveRouteName,
  navigate,
  reset,
  goBack,
  resetRoot,
  setParams,
  push,
};
