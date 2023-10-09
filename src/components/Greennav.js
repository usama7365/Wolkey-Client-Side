import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Axios from "axios";
import { API_URLS } from "../apiConfig";

const GreenNav = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(`${API_URLS}/admin/green-menu`);
      // console.log(response, "gr");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navStyle = {
    backgroundColor: "#31A551",
  };

  const navLinkStyle = {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: "15px",
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
      <Navbar style={navStyle} expand="lg" className="d-none d-lg-block">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='d-lg-flex justify-content-lg-around'>
            <Nav style={left} className="d-flex justify-content-between">
              <Nav.Link style={navLinkStyle} href="#about-us">About Us</Nav.Link>
              <Nav.Link style={navLinkStyle} href="#contact">Contact</Nav.Link>
              <Nav.Link style={navLinkStyle} href="#blog">Blog</Nav.Link>
            </Nav>
            <Nav style={right} className='d-flex justify-content-between '>
              {data.slice(0, 2).map((item, index) => (
                <Nav.Link key={index} style={navLinkStyle} href={`#${item.title.toLowerCase()}`}>
                  {item.title}
                </Nav.Link>
              ))}
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
