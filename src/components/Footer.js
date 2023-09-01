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
                  <Link href="/about">
                    <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                      About us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/security">
                    <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                      Security and information
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/advertising">
                    <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                      Advertising possibilities
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                      Contact Us
                    </a>
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
                  <Link href="/get-in-touch">
                    <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                      Get in touch
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/customer-service">
                    <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                      Customer service
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/report">
                    <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                      Report
                    </a>
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
                  <Link href="/privacy-statement">
                    <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                      Privacy statement
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-statement">
                    <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                      Cookie statement
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">
                    <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                      Terms and Conditions
                    </a>
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
                    <Link href="/course-syllabus">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Course syllabus
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/lecture-recordings">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Lecture recordings
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/discussion-forum">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Discussion forum
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/assignment-submissions">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Assignment submissions
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grading-rubric">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Grading rubric
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/online-textbook">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Online textbook
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={5} className="mt-3 mt-md-0">
                <ul className="list-unstyled" style={{ borderBottom: "none" }}>
                  <li>
                    <Link href="/office-hours-schedule">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Office hours schedule
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/course-calendar">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Course calendar
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/student-progress-report">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Student progress report
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/peer-review-assignments">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Peer review assignments
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/group-project-collaboration">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Group project collaboration space
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/videos">
                      <a style={{ color: "#FFFFFF", textDecoration: "none" }}>
                        Videos
                      </a>
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
