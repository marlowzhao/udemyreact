import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './face.png'



const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-3" options={{ max : 25 }} style={{ height: 120, width: 120 }} >
      <div className='Tilt-inner pa3'> <img style={{paddingTop: '3px'}} alt='logo' src ={brain}/> </div>
       </Tilt>
    </div>
  );
}

export default Logo;
