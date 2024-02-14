import * as React from 'react';
import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/_auth/$teamId/_detail-layout/route1/$route1Id').createRoute({
  component: Home,
});

function Home() {
  return <div>I'm Route 1</div>;
}
