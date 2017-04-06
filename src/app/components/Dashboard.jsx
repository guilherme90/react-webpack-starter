import React, { Component } from 'react'
import { Link } from 'react-router'
import MenuTop from '../layout/MenuTop'
import { 
  Grid,
  Row,
  Col
} from 'react-bootstrap'

const DashBoard = (props) => (
  <div>
    <MenuTop />
    
    <Grid>
      <Row className="show-grid">
        <Col xs={12} sm={12} md={12} lg={12}>
          {props.children}
        </Col>
      </Row>
    </Grid>
  </div>
)

export default DashBoard