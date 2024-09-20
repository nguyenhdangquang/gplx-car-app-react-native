import deepDiffer from 'react-native/lib/deepDiffer';

export const PATTERN_DRAWER_ROUTE_KEY = /^Drawer(Open|Close|Toggle)$/;

export const isDrawerRoute = route => PATTERN_DRAWER_ROUTE_KEY.test(route.routeName);

export const getActiveRouteForState = (navigationState) => {
  if (navigationState.routes) {
    return getActiveRouteForState(navigationState.routes[navigationState.index]);
  }
  return navigationState;
};

export const getActiveRouteStateChildDrawer = (navigationState) => {
  if (navigationState.routes) {
    const childState = navigationState.routes[navigationState.index];

    if (isDrawerRoute(childState)) {
      return getActiveRouteStateChildDrawer(navigationState.routes[0]);
    }
    return getActiveRouteStateChildDrawer(childState);
  }
  return navigationState;
};

export const isEqualRoute = (route, nextRoute) => {
  if (route.routeName !== nextRoute.routeName) {
    return false;
  }
  return !deepDiffer(route.params, nextRoute.params);
};
