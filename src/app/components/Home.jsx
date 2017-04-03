import React from 'react';
import {
  Alert,
  Button,
  CardGroup,
  Card,
  CardHeader, 
  CardFooter, 
  CardBlock,
  CardTitle, 
  CardText
} from 'reactstrap';

const Home = () => {
  return (
    <section>
      <br />
      <Alert color="success">
        <strong>Well done!</strong> You application started :)
      </Alert>

      <h4>What's has including ?</h4>

      <CardGroup>
        <Card outline color="secondary">
          <CardHeader>ReactStrap</CardHeader>
          
          <CardBlock>
            <CardText>Easy to use React Bootstrap 4 components</CardText>
          </CardBlock>

          <CardFooter>
            <Button color="info" size="sm" outline href="https://reactstrap.github.io" target="_blank">Website</Button>
          </CardFooter>
        </Card>

        <Card outline color="secondary">
          <CardHeader>Webpack 2</CardHeader>
          
          <CardBlock>
            <CardText>Module with dependences.</CardText>
          </CardBlock>

          <CardFooter>
            <Button color="info" size="sm" outline href="https://webpack.js.org/" target="_blank">Website</Button>
          </CardFooter>
        </Card>

        <Card outline color="secondary">
          <CardHeader>React Hot Loader</CardHeader>
          
          <CardBlock>
            <CardText>Tweak React components in real time..</CardText>
          </CardBlock>

          <CardFooter>
            <Button color="info" size="sm" outline href="https://gaearon.github.io/react-hot-loader/" target="_blank">Website</Button>
          </CardFooter>
        </Card>

        <Card outline color="secondary">
          <CardHeader>CSS Loader & Style Loader</CardHeader>
          
          <CardBlock>
            <CardText>CSS loaders module for webpack</CardText>
          </CardBlock>

          <CardFooter>
            <Button color="info" size="sm" outline href="https://github.com/webpack-contrib/css-loader" target="_blank">CSS</Button>
            <Button color="info" size="sm" outline href="https://github.com/webpack-contrib/style-loader" target="_blank">Style</Button>
          </CardFooter>
        </Card>
      </CardGroup>

      <br />

      <CardGroup>
        <Card outline color="secondary">
          <CardHeader>Babel Loader (ES6)</CardHeader>
          
          <CardBlock>
            <CardText>JavaScript compiler</CardText>
          </CardBlock>

          <CardFooter>
            <Button color="info" size="sm" outline href="https://babeljs.io/" target="_blank">Website</Button>
          </CardFooter>
        </Card>

        <Card outline color="secondary">
          <CardHeader>React Router (3.x)</CardHeader>
          
          <CardBlock>
            <CardText>Declarative routing for React</CardText>
          </CardBlock>

          <CardFooter>
            <Button color="info" size="sm" outline href="https://github.com/ReactTraining/react-router" target="_blank">Website</Button>
          </CardFooter>
        </Card>

        <Card outline color="secondary">
          <CardHeader>Express</CardHeader>
          
          <CardBlock>
            <CardText>Fast, unopinionated, minimalist web framework for Node.js</CardText>
          </CardBlock>

          <CardFooter>
            <Button color="info" size="sm" outline href="http://expressjs.com/" target="_blank">Website</Button>
          </CardFooter>
        </Card>
      </CardGroup>
    </section>
  )
}

export default Home;