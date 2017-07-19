import React from 'react'
import PropTypes from 'prop-types';
import {
  Col,
  Button,
  Glyphicon,
  Panel,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

const titlePanel = ({...props}) => {
  return props.hasChildren 
    ? (
      <div>
        <Glyphicon glyph="link" /> {props.title}
      </div>
    ) : (
      <a href={props.linkTo} target="_blank">
        <Glyphicon glyph="link" /> {props.title}
      </a>
    )
}

const FeaturePanel = (props) => (
  <Col xs={12} sm={12} md={4} lg={4}>
    <Panel header={titlePanel({
      title: props.title,
      linkTo: props.linkTo,
      hasChildren: props.children
    })} bsStyle="default">
      {props.description}
      
      {props.children && (
        <ListGroup fill>
          <ListGroupItem>
            {props.children}
          </ListGroupItem>
        </ListGroup>
      )}
    </Panel>
  </Col>
)

FeaturePanel.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string
}

export default FeaturePanel