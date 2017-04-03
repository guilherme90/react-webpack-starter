import React, { Component } from 'react';
import { Link } from 'react-router';
import { 
  Container, 
  Row, 
  Col,
  Button,
  Collapse, 
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink
} from 'reactstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="inverse" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">Webpack Boilerplate</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
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