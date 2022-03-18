import React from 'react';
import { useState } from 'react';

// css
import "../components/FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className="form-input">
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.to} />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default FormInput;



