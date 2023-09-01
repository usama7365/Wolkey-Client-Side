import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link"; // Import Link from Next.js

function Footer({ children }) {
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
                  <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/about">
                    
                      About us
                    
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/security">
                    
                      Security and information
                    
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/advertising">
                    
                      Advertising possibilities
                    
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/contact">
                    
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
                  <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/get-in-touch">
                    
                      Get in touch
                    
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/customer-service">
                    
                      Customer service
                    
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/report">
                    
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
                  <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/privacy-statement">
                    
                      Privacy statement
                    
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/cookie-statement">
                    
                      Cookie statement
                    
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/terms-and-conditions">
                    
                      Terms and Conditions
                    
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={6} className="d-flex flex-column flex-md-row">
              <Col md={5} className="mb-3 mb-md-0">
                <p
                  className="h5 w-75"
                  style={{ fontWeight: "600", color: "#FFE153" }}
                >
                  Quick links
                </p>
                <ul className="list-unstyled">
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/course-syllabus">
                      
                        Course syllabus
                      
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/lecture-recordings">
                      
                        Lecture recordings
                      
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/discussion-forum">
                      
                        Discussion forum
                      
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/assignment-submissions">
                      
                        Assignment submissions
                      
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/grading-rubric">
                      
                        Grading rubric
                      
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/online-textbook">
                      
                        Online textbook
                      
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={5} className="mt-3 mt-md-0">
                <ul className="list-unstyled" style={{ borderBottom: "none" }}>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/office-hours-schedule">
                      
                        Office hours schedule
                      
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/course-calendar">
                      
                        Course calendar
                      
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/student-progress-report">
                      
                        Student progress report
                      
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/peer-review-assignments">
                      
                        Peer review assignments
                      
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/group-project-collaboration">
                      
                        Group project collaboration space
                      
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "#FFFFFF", textDecoration: "none" }}  href="/videos">
                      
                        Videos
                      
                    </Link>
                  </li>
                  {/* Add more links as needed */}
                </ul>
              </Col>
            </Col>
          </Row>
        </Container>
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          &copy; Copyright 2007 - 2023 | All Rights Reserved | Company.nl
        </div>
      </footer>
    </>
  );
}

export default Footer;
