import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Router, browserHistory } from 'react-router'

const RootRoutes = (props) => {
  return (
    <Router key={Math.random()} history={browserHistory}>
      {props.routes()}
    </Router>
  )
}

RootRoutes.propTypes = {
  routes: PropTypes.func.isRequired
}

export default RootRoutes