import React, { PropTypes } from 'react'
import {
  Col,
  Button,
  Glyphicon,
  Panel,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

const titlePanel = (title) => (
  <div>
    <Glyphicon glyph="paperclip" /> {title}
  </div>
)

const FeaturePanel = (props) => (
  <Col xs={1} sm={1} md={4} lg={4}>
    <Panel header={titlePanel(props.title)} bsStyle="info">
      {props.description}
      
      <ListGroup fill>
        <ListGroupItem>
          {props.children || (
            <Button bsStyle="default" bsSize="sm" href={props.linkTo} target="_blank">
              <Glyphicon glyph="new-window" /> WebSite
            </Button>
          )}
        </ListGroupItem>
      </ListGroup>
    </Panel>
  </Col>
)

FeaturePanel.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired
}

export default FeaturePanel