import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import routes from './routes'
import RootRoutes from './app/RootRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/paper/bootstrap.min.css'

const __DEV__ = process.env.NODE_ENV === 'development';

if (__DEV__) {
  let counter = 0
  const renderApp = (routes) => {
    render(
      <AppContainer>
        <RootRoutes routes={routes} />
      </AppContainer>,
      document.querySelector('#root')
    )
  }

  renderApp(routes)

  if (module.hot) {
    counter++
    module.hot.accept('./routes', () => {
      const newRoutes = require('./routes').default

      renderApp(newRoutes)
    })
  }
}

if (! __DEV__) {
  const renderApp = (routes) => {
    render(
      <RootRoutes routes={routes} />,
      document.querySelector('#root')
    )
  }

  renderApp(routes)
}