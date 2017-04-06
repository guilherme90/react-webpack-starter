import React from 'react'
import { Link } from 'react-router'
import { Navbar, Glyphicon } from 'react-bootstrap'

const MenuTop = () => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <Glyphicon glyph="home" /> React & Webpack Starter Kit
        </Link>
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
)

export default MenuTop