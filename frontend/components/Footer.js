// Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} animate__animated animate__fadeIn`}>
      <p className="hvr-border-fade">Tous droits réservés &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
