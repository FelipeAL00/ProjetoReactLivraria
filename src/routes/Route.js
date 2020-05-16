import React from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper() {
  const Layout = DefaultLayout;

  return (
    <Route
      render={(props) => (
        <Layout />
      )}
    />
  );
}
