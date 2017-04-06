import React from 'react'
import {
  Alert,
  Button,
  ButtonGroup,
  PageHeader,
  Panel,
  Row,
  Col,
  Glyphicon
} from 'react-bootstrap'
import FeaturePanel from './features/FeaturePanel'

const Home = () => {
  return (
    <div>
      <Alert bsStyle="success">
        <strong>
          <Glyphicon glyph="ok" /> Well done!
        </strong> You application started :)
      </Alert>

      <PageHeader>
        What's has including ?
      </PageHeader>
      
      <Row>
        <FeaturePanel 
          title="React Bootstrap" 
          description="React-Bootstrap is a library of reusable front-end components (Bootstrap v.3.3.7)" 
          linkTo="https://react-bootstrap.github.io" />

        <FeaturePanel 
          title="Webpack 2" 
          description="Module with dependences" 
          linkTo="https://webpack.js.org/" />

        <FeaturePanel 
          title="React Hot Loader" 
          description="Tweak React components in real time" 
          linkTo="https://gaearon.github.io/react-hot-loader/" />
      </Row>

      <Row>
        <FeaturePanel 
          title="CSS Loader & Style Loader" 
          description="CSS loaders module for webpack" 
          linkTo="https://gaearon.github.io/react-hot-loader/">
            <ButtonGroup>
              <Button bsStyle="default" bsSize="sm" href="https://github.com/webpack-contrib/css-loader" target="_blank">
                <Glyphicon glyph="align-left" /> CSS
              </Button>
              <Button bsStyle="default" bsSize="sm" href="https://github.com/webpack-contrib/style-loader" target="_blank">
                <Glyphicon glyph="align-left" /> Style
              </Button>
            </ButtonGroup>
          </FeaturePanel>

        <FeaturePanel 
          title="Babel Loader (ES6)" 
          description="JavaScript compiler" 
          linkTo="https://babeljs.io/" />

        <FeaturePanel 
          title="React Router (3.x)" 
          description="Declarative routing for React" 
          linkTo="https://github.com/ReactTraining/react-router" />
      </Row>

      <Row>
        <FeaturePanel 
          title="Express" 
          description="Fast, unopinionated, minimalist web framework for Node.js" 
          linkTo="http://expressjs.com/" />
      </Row>
    </div>
  )
}

export default Home;