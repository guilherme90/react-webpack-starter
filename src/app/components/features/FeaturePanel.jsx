import React, { PropTypes } from 'react'
import {
  Col,
  Button,
  Glyphicon,
  Panel,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

const titlePanel = (title, linkTo, hasChildren) => {
  return hasChildren 
    ? (
      <div>
        <Glyphicon glyph="link" /> {title}
      </div>
    ) : (
      <a href={linkTo} target="_blank">
        <Glyphicon glyph="link" /> {title}
      </a>
    )
}

const FeaturePanel = (props) => (
  <Col xs={1} sm={1} md={4} lg={4}>
    <Panel header={titlePanel(props.title, props.linkTo, props.children)} bsStyle="default">
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