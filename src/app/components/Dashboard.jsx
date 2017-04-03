import React, { Component } from 'react';
import { Link } from 'react-router';
import { 
  Container, 
  Row, 
  Col,
  Button,
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink
} from 'reactstrap';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar color="inverse" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">React & Webpack Starter Kit</NavbarBrand>
        </Navbar>

        <Container fluid={true}>
          <Row>
            <Col 
              xs={{size: 10, push: 1}} 
              sm={{size: 10, push: 1}} 
              md={{size: 10, push: 1}} 
              lg={{size: 10, push: 1}}>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;