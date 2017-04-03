import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

const RootContainer = (props) => {
  return (
    <Router history={browserHistory}>
      {props.routes()}
    </Router>
  )
};

export default RootContainer;