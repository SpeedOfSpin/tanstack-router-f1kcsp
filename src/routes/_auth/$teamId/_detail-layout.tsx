import * as React from 'react';
import { Link, Outlet, FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/_auth/$teamId/_detail-layout').createRoute(
  {
    component: LayoutComponent,
  }
);

function LayoutComponent() {
  return (
    <div>
      <div>I'm a nested layout</div>
      <div className="flex gap-2">
        <Link
          to="/$teamId/detail-layout/route1/$route1Id"
          params={{ route1Id: '123', teamId: '123' }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          Nested Route 1
        </Link>
        <Link
          to="/$teamId/detail-layout/route2/$route2Id"
          params={{ route2Id: '123', teamId: '123' }}
          activeProps={{
            className: 'font-bold',
          }}
        >
          Nested Route 2
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
