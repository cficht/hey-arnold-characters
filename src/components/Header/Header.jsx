import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App/App.css';

const Header = () => (
  <div className={styles.headerDiv}>
    <h1>Hey Arnold</h1>
    <Link to="/" >Home</Link>
  </div>
);

export default Header;
