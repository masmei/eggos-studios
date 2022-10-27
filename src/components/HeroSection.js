import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/egghatching.mov' autoPlay loop muted />
      <h1>Leh...Leggo...Myy...Eh...</h1>
      <p>It's Probably Nothing...</p>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Mint
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;
