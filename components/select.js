import React from 'react';

const Select = ({ options, value, label, onChange, name }) => (
  <div className="input-wrapper">
    <label className="input-label">{label}</label>
    <div className="select">
      <select className="select-text" value={value} name={name} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <span className="select-bar"></span>
    </div>
  </div>
);

export default Select;
