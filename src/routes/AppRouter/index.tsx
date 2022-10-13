import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// components
import LoadingScreen from '@/components/LoadingScreen';

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen open />}>
      <Component {...props} />
    </Suspense>
  );

export default function AppRouter() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },

    {
      path: '/campaign',
      element: <Campaign />,
    },
    {
      path: '/campaign/add',
      element: <AddCampaign />,
    },
    { path: '*', element: <NotFound /> },
  ]);
}
const Home = Loadable(lazy(() => import('@/pages/Home')));
const NotFound = Loadable(lazy(() => import('@/pages/NotFound')));
const Campaign = Loadable(lazy(() => import('@/pages/Campaign/Campaign')));
const AddCampaign = Loadable(lazy(() => import('@/pages/Campaign/AddCampaign')));
