import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import './About.css';

const About = () => (
  <div className="height-min mt-5">
    <div className="container mt-5">
      <div className="About" data-testid="About">
        <LoremIpsum p={1} />
      </div>
    </div>
  </div>
);


export default About;
