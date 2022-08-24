import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="main-footer">
      <div className='text-center p-1' >
        &copy; {new Date().getFullYear()} Copyright:{' '}

        <p>Evaldas Skačkauskas</p>
      </div>
  </div>
);


export default Footer;
