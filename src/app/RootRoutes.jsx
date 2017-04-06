import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

const RootRoutes = (props) => {
  return (
    <Router history={browserHistory}>
      {props.routes()}
    </Router>
  )
};

export default RootRoutes;