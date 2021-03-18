import React, { lazy, Suspense } from 'react';

const LazyGlobalSearch = lazy(() => import('./GlobalSearch'));

const GlobalSearch = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyGlobalSearch {...props} />
  </Suspense>
);

export default GlobalSearch;
