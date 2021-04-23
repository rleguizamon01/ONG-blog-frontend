import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import {Link, NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      {/* <!-- Main Navbar--> */}
      <Navbar expand="lg">
        <Container>
          {/* <!-- Navbar Brand --> */}
          <Link to="/">
            <Navbar.Brand>ONG Team</Navbar.Brand>
          </Link>
          {/* <!-- Toggle Button--> */}
          <Navbar.Toggle aria-controls="navbarcollapse"/>
          {/* <!-- Navbar Menu --> */}
          <Navbar.Collapse id="navbarcollapse">
            <Nav className="ml-auto">
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/posts">Posts</NavLink>
              <NavLink to="/volunteers/create">Voluntariado</NavLink>
              <NavLink to="/donations/create">Donar</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
