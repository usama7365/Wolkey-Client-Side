import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useRouter } from "next/router";

import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const navStyle = {
    backgroundColor: "#F55D02",
  };

  const [response, setResponse] = useState(null);

  const router = useRouter();

  const checkAuthStatus = () => {
    if (typeof window !== "undefined") {
      const storedResponse = localStorage.getItem("auth-user");
      if (storedResponse) {
        const parsedResponse = JSON.parse(storedResponse);
        setResponse(parsedResponse);
      } else {
        setResponse(null);
      }
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const handleLogout = () => {
    localStorage.removeItem("auth-user");
    setResponse(null);
    router.push("/home");
  };

  return (
    <Navbar expand="xl" style={navStyle}>
      <div className="container">
        <Nav className="mr-auto col-2">
          <Navbar.Brand>LOGO</Navbar.Brand>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto col-xl-7  justify-content-between">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>My Blogs</Nav.Link>
            <Nav.Link>Create Blogs</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>

          <Nav className="ml-auto  d-xl-flex align-items-xl-center ">
            <Nav.Link href="#customer-service">
              <RiCustomerService2Fill /> Customer Service
            </Nav.Link>

            <Nav.Link
            
              onClick={(e) => {
                if (!response) {
                  e.preventDefault();
                  router.push("/login");
                }
              }}
            >
              {!response ? (
                <span>
                  <AiOutlineUser /> Login
                </span>
              ) : (
                <NavDropdown
                  title=
                   
                       {   <span> <FaUserCircle/>  {response.name}</span> }
                  
                  
                
                  id="user-dropdown"
                >
                  <NavDropdown.Item>Settings</NavDropdown.Item>
                  <NavDropdown.Item>Messages</NavDropdown.Item>
                  <NavDropdown.Item>Notifications</NavDropdown.Item>
                  <NavDropdown.Item>Invoice</NavDropdown.Item>
                  <NavDropdown.Item>Balance Expenses</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav.Link>

            {response ? null : <Nav.Link href="#register">Register</Nav.Link>}
            <NavDropdown title="Country" id="country-dropdown">
              <NavDropdown.Item>United States</NavDropdown.Item>
              <NavDropdown.Item>United Kingdom</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
