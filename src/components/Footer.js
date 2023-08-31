import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link"

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
                <Link
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Security and information
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Advertising possibilities
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Contact Us
                </Link>
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
                <Link
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Get in touch
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Customer service
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Report
                </Link>
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
                <Link
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Privacy statement
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Cookie statement
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "#FFFFFF", textDecoration: "none" }}
                  href="/"
                >
                  Terms and Conditions
                </Link>
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
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Course syllabus
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Lecture recordings
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Discussion forum
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Assignment submissions
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Grading rubric
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Online textbook
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={5} className="mt-3 mt-md-0">
              <ul className="list-unstyled" style={{ borderBottom: "none" }}>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Office hours schedule
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Course calendar
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Student progress report
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Peer review assignments
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Group project collaboration space
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "#FFFFFF", textDecoration: "none" }}
                    href="/"
                  >
                    Videos
                  </Link>
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
