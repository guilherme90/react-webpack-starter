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
          title="React Hot Loader" 
          description="Tweak React components in real time" 
          linkTo="https://gaearon.github.io/react-hot-loader/" />

        <FeaturePanel 
          title="React Router (3.x)" 
          description="Declarative routing for React" 
          linkTo="https://github.com/ReactTraining/react-router" />        
      </Row>

      <Row>
        <FeaturePanel 
          title="Webpack 3" 
          description="Module with dependences"
          linkTo="https://webpack.js.org/" />

        <FeaturePanel 
          title="Webpack Hot & Dev Middleware" 
          description="Middlewares for development mode">
          <ButtonGroup>
            <Button bsStyle="warning" bsSize="sm" href="https://github.com/webpack/webpack-dev-middleware" target="_blank">
              <Glyphicon glyph="chevron-right" /> Dev Middleware
            </Button>

            <Button bsStyle="primary" bsSize="sm" href="https://github.com/glenjamin/webpack-hot-middleware" target="_blank">
              <Glyphicon glyph="chevron-right" /> Hot Middleware
            </Button>
          </ButtonGroup>
        </FeaturePanel>

        <FeaturePanel 
          title="CSS Loader & Style Loader" 
          description="CSS loaders module for webpack">
          <ButtonGroup>
            <Button bsStyle="warning" bsSize="sm" href="https://github.com/webpack-contrib/css-loader" target="_blank">
              <Glyphicon glyph="chevron-right" /> CSS
            </Button>

            <Button bsStyle="primary" bsSize="sm" href="https://github.com/webpack-contrib/style-loader" target="_blank">
              <Glyphicon glyph="chevron-right" /> Style
            </Button>
          </ButtonGroup>
        </FeaturePanel>
      </Row>

      <Row>
        <FeaturePanel 
          title="Babel Loader" 
          description="JavaScript compiler" 
          linkTo="https://babeljs.io/" />

        <FeaturePanel 
          title="Express" 
          description="Fast, unopinionated, minimalist web framework for Node.js" 
          linkTo="http://expressjs.com/" />
      </Row>
    </div>
  )
}

export default Home