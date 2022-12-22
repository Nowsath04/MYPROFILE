import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';


export default function NavBar() {
  return (
  
      <Navbar expand="lg">
          <Container className="d-flex justify-content-around">
            <Navbar.Brand className="text-light mx-5 px-5" href="#home"><h1 className="heading">NOWSATH A</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-center toggle">
                <Nav.Link className="m-3 nav-link" href="#Home">Home</Nav.Link>
                <Nav.Link className="m-3 nav-link" href="#AboutMe">About</Nav.Link>
                <Nav.Link className="m-3 nav-link" href="#Resume">Skills</Nav.Link>
                <Nav.Link className="m-3 nav-link" href="#Projects1">Projects</Nav.Link>
                <Nav.Link className="m-3 nav-link" href="#ContactMe">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
 )
}
