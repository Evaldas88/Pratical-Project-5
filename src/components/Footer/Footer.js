import React from 'react';
import './Footer.css';

const Footer = () => (
      <div className='text-center p-1 bacground' >
        &copy; {new Date().getFullYear()} Copyright:{' '}

        <p>Evaldas Skačkauskas</p>
      </div>

);


export default Footer;
