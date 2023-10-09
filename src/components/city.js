import React from 'react';
import styles from '../styles/profile.module.css';

const City = () => {
  return (
    <div className={`col-2 d-none d-lg-block ${styles.city}`}>
      <div className={styles.top}>
        <h5>Top Cities</h5>
        <p>lahore</p>
        <p>lahore</p>
        <p>lahore</p>
        <p>lahore</p>
        <p>lahore</p>
        <p>lahore</p>
        <p>lahore</p>
        {/* Add more 'p' elements as needed */}
      </div>
      <div className={styles.top}>
        <h4>All Cities</h4>
        <p>lahore</p>
        <p>lahore</p>
        <p>lahore</p>
        <p>lahore</p>
        <p>lahore</p>
        <p>lahore</p>
        <p>lahore</p>
        {/* Add more 'p' elements as needed */}
      </div>
    </div>
  );
};

export default City;
