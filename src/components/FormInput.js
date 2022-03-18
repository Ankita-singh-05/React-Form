import React from 'react';

// css
import "../components/FormInput.css";

const FormInput = (props) => {
  const{label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <>
      <div className="form-input">
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default FormInput;



