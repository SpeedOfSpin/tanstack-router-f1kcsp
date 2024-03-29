import * as React from 'react';
import { Link, Outlet, RootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = new RootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to={'/posts'}
          activeProps={{
            className: 'font-bold',
          }}
        >
          Posts
        </Link>
        <Link
          to="/layout-a"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Layout
        </Link>
        <Link
          to="/$teamId/detail-layout"
          params={{ teamId: 'team123' }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          New Layout Directory
        </Link>
      </div>
      <hr />
      <Outlet />
      {/* Start rendering router matches */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
