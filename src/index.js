import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import routes from './routes';
import RootContainer from './app/containers/RootContainer';
import 'bootstrap/dist/css/bootstrap.css';

const renderApp = (routes) => {
  render(
    <AppContainer>
      <RootContainer routes={routes} />
    </AppContainer>,
    document.querySelector('#root')
  );
}

renderApp(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;

    renderApp(newRoutes);
  });
}