import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';

const GreenNav = ({ children }) => {

  const navStyle = {
    backgroundColor: "#31A551",
  };

  const navLinkStyle = {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: "15px",
    fontFamily: "Raleway",
  }; 

  const btnStyle = {
    backgroundColor: "#FFFFFF",
    color: "#31A551",
    fontWeight: "600",
    fontSize: "13px",
  
  };

  const left = {
    width: "270px"
  };

  const right = {
    width: "370px",
  };

  return (
    <>
    <Navbar style={navStyle} expand="lg" className="d-none d-lg-block" >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          // Hide on small screens, show on xl screens
        />
        <Navbar.Collapse id="basic-navbar-nav" className='d-lg-flex justify-content-lg-around'>
          <Nav style={left} className="d-flex justify-content-between">
            <Nav.Link style={navLinkStyle} href="#about-us">About Us</Nav.Link>
            <Nav.Link style={navLinkStyle} href="#contact">Contact</Nav.Link>
            <Nav.Link style={navLinkStyle} href="#blog">Blog</Nav.Link>
          </Nav>
          {/* Right side of the Navbar */}
          <Nav style={right} className='d-flex justify-content-between '>
            <Nav.Link style={navLinkStyle} href="#uk-teachers-reviews">UK Teachers Reviews</Nav.Link>
            <Nav.Link style={navLinkStyle} href="#learn-for-all">LearnForAll</Nav.Link>
            <Button style={btnStyle} variant="outline-light ">Advertise</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <main>{children}</main>
    </>
 );
};

export default GreenNav;

