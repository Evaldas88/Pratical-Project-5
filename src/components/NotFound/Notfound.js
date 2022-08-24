import React from 'react';
import MyImage from '../Images/404.png'

const NotFound = () => (
  <div className="height-min mt-5">
    <div className="container text-center mt-5">
      <img src={MyImage} alt='Error' className='error' />
    </div>
  </div>
);


export default NotFound;
