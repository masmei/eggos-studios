import React from 'react';
import PropTypes from 'prop-types';


const Spinning = ({ alt, src, spinSpeed }) => (
    <div className={`logo-container ${spinSpeed}`}>
      <img className="logo" alt={alt} src={src} />
    </div>
  );
  
 Spinning.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    spinSpeed: PropTypes.string.isRequired
  };

export default Spinning;

