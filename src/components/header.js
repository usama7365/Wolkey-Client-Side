import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";


const Header = ({ width }) => {
  const headerStyle = {
    width: width || "100%",
    backgroundColor: "#F55D02",
  };



  const name = useSelector((state) => state.userLogin?.userInfo?.name);

  const [response, setResponse] = useState(null);

  const router = useRouter();
  const {profileId} = router.query
  console.log(profileId , "pro")

  const storedResponse =
    typeof window !== "undefined" ? localStorage.getItem("auth-user") : null;
  console.log(storedResponse, "res");

  const checkAuthStatus = () => {
    if (storedResponse) {
      const parsedResponse = JSON.parse(storedResponse);
      setResponse(parsedResponse);
    } else {
      setResponse(null);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, [name]);

  const handleLogout = () => {
    localStorage.removeItem("auth-user");
    localStorage.removeItem("profile");
    setResponse(null);
    router.push("/home");
  };

  const profile =()=>{
    router.push('/ViewProfile')
  }

  return (
    <Navbar
      expand="xl"
      // style={{ ...navStyle, width: customWidth || "100%" }}
      style={headerStyle} // Use customWidth prop
    >
      <div className="container ">
        <Nav className="mr-auto col-2">
          <Navbar.Brand>LOGO</Navbar.Brand>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto col-xl-7  justify-content-between">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link>My Blogs</Nav.Link>
            <Nav.Link>Create Blogs</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>

          <Nav className="ml-auto  d-xl-flex align-items-xl-center text-nowrap ">
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
                  title={
                    <span>
                      {" "}
                      <FaUserCircle /> {response.name}
                    </span>
                  }
                  id="user-dropdown"
                >
                  {response.profileId ? (
                    
                      <NavDropdown.Item onClick={profile}>My Profile</NavDropdown.Item>
                    
                  ) : null}
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
