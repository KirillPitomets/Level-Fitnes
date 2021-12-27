import React from 'react';
// ======= Styles ======
import cl from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className="container">
        <p className={cl.text}>
          Level Fitness © 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;