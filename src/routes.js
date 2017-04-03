import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Dashboard from './app/components/Dashboard';
import Home from './app/components/Home';

const routes = () => {
  return (
    <Route path="/" component={Dashboard}>
      <IndexRoute component={Home} />

      <Redirect from="*" to="/" />
    </Route>
  )
};

export default routes;