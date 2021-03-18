import React, { lazy, Suspense } from 'react';

const LazyCartNavigation = lazy(() => import('./CartNavigation'));

const CartNavigation = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCartNavigation {...props} />
  </Suspense>
);

export default CartNavigation;
