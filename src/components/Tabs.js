import React from "react";
import { Nav } from "react-bootstrap";
import { useRouter } from "next/router";

const TabDiv = () => {
  const router = useRouter();

  // Determine the active tab based on the current route
  const activeTab = (route) => {
    if (router.pathname === route) {
      return true;
    }
    if (route === "/photos" && router.pathname !== "/photos") {
      return false;
    }
    return false;
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link
              eventKey="/ViewProfile"
              href="/ViewProfile"
              className={`custom-tab ${activeTab("/viewProfile") ? "active" : ""}`}
            >
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="/photos"
              href="/photos"
              className={`custom-tab ${activeTab("/photos") ? "active" : ""}`}
            >
              Photos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="/videos"
              href="/videos"
              className={`custom-tab ${activeTab("/videos") ? "active" : ""}`}
            >
              Videos
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <style jsx>
        {`
          .custom-tab {
            color: #333;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 10px;
            text-decoration: none;
          }

          .custom-tab:hover {
            background-color: #F55D02;
            color: white;
          }

          .custom-tab.active {
            background-color: #F55D02 !important;
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default TabDiv;
