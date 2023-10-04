import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useRouter } from "next/router";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
// import Link from "next/link";
import styles from "../styles/header.module.css";
import axios from "axios";
import { API_URLS } from "../apiConfig";

const Header = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URLS}/admin/orange-menu`);
      setData(response.data);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const name = useSelector((state) => state.userLogin?.userInfo?.name);


  const [response, setResponse] = useState(null);

  const router = useRouter();
  const { profileId } = router.query;


  const storedResponse =
    typeof window !== "undefined" ? localStorage.getItem("auth-user") : null;
    

  const storedProfile =
    typeof window !== "undefined" ? localStorage.getItem("profile") : null;
    const agencyProfileId=typeof window !== "undefined" ? localStorage.getItem("agencyProfileId") : null;
    console.log(agencyProfileId , "agencyyyyy")

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
  }, [storedResponse]);

  const handleLogout = () => {
    localStorage.removeItem("auth-user");
    localStorage.removeItem("profile");
    localStorage.removeItem("agencyProfileId");
    setResponse(null);
    router.push("/home");
  };

  const getDetailProfile = (_id) => {
    console.log(_id , agencyProfileId)
    router.push(`/viewProfile/${_id}`)
  };

  const settings = () => {
    router.push("/settings");
  };

  const balance = () => {
    router.push("/balance");
  };

  const messages = () => {
    router.push("/messages");
  };

  const invoice = () => {
    router.push("/invoice");
  };

  const handleNavItemClick = (item) => {
    router.push({
      pathname: "/teachersList",
      query: { selectedItem: item },
    });
  };

  return (
    <Navbar expand="lg" className={styles.main}>
      <div className="container ">
        <Nav className="mr-auto col-1">
          <Navbar.Brand>LOGO</Navbar.Brand>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto col-lg-8  col-xl-7  justify-content-between">
            <Nav.Link href="/home">Home</Nav.Link>
            {data.slice(0, 6).map((item, index) => (
              <Nav.Link
                key={index}
                onClick={() => handleNavItemClick(item.title)}
              >
                {item.title}
              </Nav.Link>
            ))}
            <Nav.Link href="/videos">Videos</Nav.Link>
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
                  {response ? (
                    <NavDropdown.Item
                      onClick={() => {
                        const parsedProfile = JSON.parse(storedProfile); // Define parsedProfile here
                        getDetailProfile(parsedProfile?._id);
                      }}
                    >
                      My Profile
                    </NavDropdown.Item>
                  ) : null}
                  <NavDropdown.Item onClick={settings}>
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={messages}>
                    Messages
                  </NavDropdown.Item>
                  <NavDropdown.Item>Notifications</NavDropdown.Item>
                  <NavDropdown.Item onClick={invoice}>Invoice</NavDropdown.Item>
                  <NavDropdown.Item onClick={balance}>
                    Balance Expenses
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav.Link>

            {response ? null : <Nav.Link href="#login"  onClick={(e) => {
                if (!response) {
                  e.preventDefault();
                  router.push("/login");
                }
              }} >Register</Nav.Link>}
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
