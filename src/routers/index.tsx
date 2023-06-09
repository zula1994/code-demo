import { Navigate, useRoutes } from 'react-router-dom';

import { routers } from './routerMap';

export interface RouteConfig {
  path: string;
  meta?: { title: string } & AnyObject;
  element: any;
  children?: RouteConfig[];
  redirect?: string;
}

// 渲染路由
const renderRoutes = (routes: RouteConfig[]) => {
  return routes.map((item: RouteConfig) => {
    const route: AnyObject = { handle: item.meta, path: item.path, key: item.path };

    if (item.element) {
      route.element = (
          <item.element />
      );
    }

    if (item.children) {
      route.children = renderRoutes(item.children);
    }
    if (item.redirect) {
      route.element = <Navigate to={item.redirect} replace />;
    }

    return route;
  });
};

export default function Router() {
  return useRoutes(renderRoutes(routers));
}
