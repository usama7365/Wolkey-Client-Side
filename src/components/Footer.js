import React from "react";
import Link from 'next/link'
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/footer.module.css'
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
      <Container className={`py-5 ${styles.main}`} style={{ width: "90%" }}>
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
                  href="/"
                >
                  About us
                </Link>
              </li>
              <li>

                <Link
    
                  href="/"
                >
                  Security and information
                </Link>
              </li>
              <li>

                <Link
    
                  href="/"
                >
                  Advertising possibilities
                </Link>
              </li>
              <li>

                <Link
    
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
    
                  href="/"
                >
                  Get in touch
                </Link>
              </li>
              <li>

                <Link
    
                  href="/"
                >
                  Customer service
                </Link>
              </li>
              <li>

                <Link
    
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
    
                  href="/"
                >
                  Privacy statement
                </Link>
              </li>
              <li>

                <Link
    
                  href="/"
                >
                  Cookie statement
                </Link>
              </li>
              <li>

                <Link
    
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
      
                    href="/"
                  >
                    Course syllabus
                  </Link>
                </li>
                <li>

                  <Link
      
                    href="/"
                  >
                    Lecture recordings
                  </Link>
                </li>
                <li>

                  <Link
      
                    href="/"
                  >
                    Discussion forum
                  </Link>
                </li>
                <li>

                  <Link
      
                    href="/"
                  >
                    Assignment submissions
                  </Link>
                </li>
                <li>

                  <Link
      
                    href="/"
                  >
                    Grading rubric
                  </Link>
                </li>
                <li>

                  <Link
      
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
      
                    href="/"
                  >
                    Office hours schedule
                  </Link>
                </li>
                <li>

                  <Link
      
                    href="/"
                  >
                    Course calendar
                  </Link>
                </li>
                <li>

                  <Link
      
                    href="/"
                  >
                    Student progress report
                  </Link>
                </li>
                <li>

                  <Link
      
                    href="/"
                  >
                    Peer review assignments
                  </Link>
                </li>
                <li>

                  <Link
      
                    href="/"
                  >
                    Group project collaboration space
                  </Link>
                </li>
                <li>

                  <Link
      
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
