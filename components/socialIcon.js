import React from 'react';
import FA from 'react-fontawesome';

const SocialIcon = (props) => (
  <div className="social-icon-wrapper">
    <FA className="social-icon" size={50} {...props} />
  </div>
);

export default SocialIcon;
