import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BiSolidUser } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import { BsSunFill } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';

const OrangeNav = () => {
  const navLinkStyle = {
    fontWeight: "600",
    fontSize: "15px",
  };
  const navStyle = {
    backgroundColor: "#F55D02",
    
  };

  const { theme, setTheme } = useTheme();

  return (
    <Navbar style={navStyle}  className="text-nowrap " expand="xl" >
      <Container>
       
          <Navbar.Brand>LOGO</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         <div className="d-flex justify-content-end">
         <Nav className="me-auto px-xl-5 " >
           
           <Nav.Link style={navLinkStyle} className="px-xxl-3"  href="#home">Home</Nav.Link>
             <Nav.Link style={navLinkStyle} className="px-xxl-3"  href="#psychology">Psychology</Nav.Link>
             <Nav.Link style={navLinkStyle} className="px-xxl-3" href="#literature">Literature</Nav.Link>
             <Nav.Link style={navLinkStyle} className="px-xxl-3" href="#biology">Biology</Nav.Link>
             <Nav.Link style={navLinkStyle} className="px-xxl-3" href="#philosophy">Philosophy</Nav.Link>
             <Nav.Link style={navLinkStyle} className="px-xxl-3" href="#videos">Videos</Nav.Link>
             <Nav.Link style={navLinkStyle} className="px-xxl-3" href="#add-teacher">Add Teacher</Nav.Link>
            
           </Nav>
 
 
           <Nav >
             <Nav.Link style={navLinkStyle} className="px-xxl-3" href="#customer-service">
                <RiCustomerService2Fill/> Customer Service
             </Nav.Link>
             <Nav.Link style={navLinkStyle} className="px-xxl-3" href="#profile">
               <BiSolidUser/> Login
             </Nav.Link>
             <hr className="vertical-hr d-lg-none" />
             <Nav.Link style={navLinkStyle} href="#register" className="px-xxl-3">Register</Nav.Link>
             <NavDropdown title="Country" id="country-dropdown">
               <NavDropdown.Item href="#country-us">United States</NavDropdown.Item>
               <NavDropdown.Item href="#country-uk">United Kingdom</NavDropdown.Item>
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
