import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FiMenu, FiX } from 'react-icons/fi'; // Import the toggle icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import styles from '../styles/sideNavbar.module.css'; // Import your CSS module

function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={styles['toggle-icon']} onClick={toggleNavbar}>
    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
  </div>
    <div className={`${styles['side-navbar']} ${isOpen ? styles.open : ''}`}>
     
      <Nav className={styles['flex-column']}>
        <Nav.Item>
          <Nav.Link className={styles['nav-link']}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles['nav-link']}>Reports</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles['nav-link']}>Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles['nav-link']}>Team</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles['nav-link']}>Messages</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles['nav-link']}>Support</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
    </>
  );
}

export default SideNavbar;
