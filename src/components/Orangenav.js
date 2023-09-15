import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import Dashboard from "../pages/home";
import { useRouter } from "next/router";

const OrangeNav = () => {
  const navLinkStyle = {
    fontWeight: "600",
    fontSize: "15px",
  };
  const navStyle = {
    backgroundColor: "#F55D02",
    display:"flex",
    alignItems:"center"
  };

  const [response, setResponse] = useState(null);
  const router = useRouter();

  const checkAuthStatus = () => {
    // Check if localStorage is available (client-side)
    if (typeof window !== "undefined") {
      const storedResponse = localStorage.getItem("auth-user");
      if (storedResponse) {
        // Parse the stored response as JSON
        const parsedResponse = JSON.parse(storedResponse);
        setResponse(parsedResponse);
      } else {
        setResponse(null); // No user authenticated
      }
    }
  };

  useEffect(() => {
    // Check and update authentication status when the component mounts
    checkAuthStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth-user");
    setResponse(null); // Update the state to indicate no user is authenticated
    router.push("/home");
  };

  return (
    <Navbar style={navStyle} className="text-nowrap " expand="xl">
      <Container>
        <Navbar.Brand>LOGO</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="bg-info d-flex">
          <Nav className="me-auto bg-primary">
            <Nav.Link style={navLinkStyle} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={navLinkStyle} href="#psychology">
              Psychology
            </Nav.Link>
            <Nav.Link style={navLinkStyle} href="#literature">
              Literature
            </Nav.Link>
            <Nav.Link style={navLinkStyle} href="#biology">
              Biology
            </Nav.Link>
            <Nav.Link style={navLinkStyle} href="#philosophy">
              Philosophy
            </Nav.Link>
            <Nav.Link style={navLinkStyle} href="#videos">
              Videos
            </Nav.Link>
            <Nav.Link style={navLinkStyle} href="#add-teacher">
              Add Teacher
            </Nav.Link>
          </Nav>

          <Nav className="align-items-center">
            <Nav.Link style={navLinkStyle} href="#customer-service">
              <RiCustomerService2Fill /> Customer Service
            </Nav.Link>
            <Nav.Link
              style={navLinkStyle}
              onClick={response ? null : (e) => {
                e.preventDefault(); // Prevent the default link behavior
                router.push("/login"); // Programmatically navigate to the login page
              }}
            >
              {response ? null : (
                <span>
                  <FaCircleUser /> Login
                </span>
              )}
              {response && (
                <NavDropdown title={<FaCircleUser />} id="user-dropdown">
                  {/* Add dropdown items for authenticated user */}
                  <NavDropdown.Item>Settings</NavDropdown.Item>
                  <NavDropdown.Item>Messages</NavDropdown.Item>
                  <NavDropdown.Item>Notifications</NavDropdown.Item>
                  <NavDropdown.Item>Invoice</NavDropdown.Item>
                  <NavDropdown.Item>Balance Expences</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>Log out</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav.Link>
            <hr className="vertical-hr d-lg-none" />
            {
              response ? null :
              <Nav.Link style={navLinkStyle} href="#register">
              Register
            </Nav.Link>
            }
            <NavDropdown title="Country" id="country-dropdown">
              <NavDropdown.Item>United States</NavDropdown.Item>
              <NavDropdown.Item>United Kingdom</NavDropdown.Item>
              {/* Add more countries as needed */}
            </NavDropdown>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default OrangeNav;
