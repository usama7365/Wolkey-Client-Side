import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer({children}) {
  return (
    <>
    <main>{children}</main>
    <footer
      className="shadow"
      style={{
        borderTop: "5px solid #FF0000",
        background: "#181818",
        color: "#FFFFFF",
      }}
    >
      <Container className="py-5" style={{ width: "90%" }}>
        <Row className="flex-wrap">
          <Col md={2} style={{ borderRight: "1px solid #FFFFFF" }}>
            <p
              className="h5 mb-4"
              style={{ fontWeight: "600", color: "#FFE153" }}
            >
              General
            </p>
            <ul className="list-unstyled">
              <li>
                <a
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Security and information
                </a>
              </li>
              <li>
                <a
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Advertising possibilities
                </a>
              </li>
              <li>
                <a
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} style={{ borderRight: "1px solid #FFFFFF" }}>
            <p
              className="h5 mb-4"
              style={{ fontWeight: "600", color: "#FFE153" }}
            >
              Service
            </p>
            <ul className="list-unstyled">
              <li>
                <a
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Get in touch
                </a>
              </li>
              <li>
                <a
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Customer service
                </a>
              </li>
              <li>
                <a
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Report
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} style={{ borderRight: "1px solid #FFFFFF" }}>
            <p
              className="h5 mb-4"
              style={{ fontWeight: "600", color: "#FFE153" }}
            >
              Legal
            </p>
            <ul className="list-unstyled">
              <li>
                <a
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Privacy statement
                </a>
              </li>
              <li>
                <a
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Cookie statement
                </a>
              </li>
              <li>
                <a
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} className="d-flex flex-column flex-md-row">
            <Col
              md={5}
              className ="mb-3 mb-md-0"
              style={{}}
            >
              <p
                className="h5 w-75"
                style={{ fontWeight: "600", color: "#FFE153" }}
              >
                Quick links
              </p>
              <ul className="list-unstyled">
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Course syllabus
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Lecture recordings
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Discussion forum
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Assignment submissions
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Grading rubric
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Online textbook
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={5} className="mt-3 mt-md-0">
              <ul className="list-unstyled" style={{ borderBottom: "none" }}>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Office hours schedule
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Course calendar
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Student progress report
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Peer review assignments
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Group project collaboration space
                  </a>
                </li>
                <li>
                  <a
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Videos
                  </a>
                </li>
                {/* Add more links as needed */}
              </ul>
            </Col>
          </Col>
        </Row>
      </Container>
      <div style={{height:"100%", display:"flex",justifyContent:"center", textAlign:"center"}} >&copy; Copyright 2007 - 2023 | All Rights Reserved | Company.nl</div>
    </footer>
    </>
  );
}

export default Footer;
