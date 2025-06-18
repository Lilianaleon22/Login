import React from 'react';

const InputField = ({ label, value, onChange, placeholder, type = 'text' }) => (
  <div className="input-group">
    <label>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;