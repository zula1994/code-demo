import { lazy } from 'react';
const Index  = lazy(() => import('@/pages/index'));

export const routers = [
    {
      path: '/',
      element: Index
    },
]