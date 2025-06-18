import React from 'react';

function CampoDeContraseña({ value, onChange, placeholder }) {
  return (
    <input
      type="password"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default CampoDeContraseña;