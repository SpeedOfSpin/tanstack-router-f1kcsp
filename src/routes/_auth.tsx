import * as React from 'react';
import { Link, Outlet, FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/_auth').createRoute({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      <div>I'm a auth layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
