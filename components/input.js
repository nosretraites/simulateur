import React from 'react';
import FA from 'react-fontawesome';

const Input = ({ label, icon, width = "200px", ...inputProps }) => (
  <div className="input-wrapper">
    <label className="input-label">{label}</label>
    <div className="input" style={{width}}>
      <input {...inputProps} />
      <div className="line" />
      {icon && <FA style={{ position: 'absolute', right: 0, bottom: 0 }} name={icon} />}
    </div>
  </div>
);

export default Input;
