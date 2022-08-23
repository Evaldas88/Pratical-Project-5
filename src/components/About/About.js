import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import './About.css';

const About = () => (
  <div className="container">
  <div className="About" data-testid="About">
 <LoremIpsum p={1} />
  </div>
  </div>
);


export default About;
