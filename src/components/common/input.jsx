import React from "react";
const Input = ({ name, placeholder, value, onChange, errors }) => {
  return (
    <React.Fragment>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        errors={errors}
        className="form-control contactform-input"
        // required
      />

      {errors && (
        <p
          className="alert alert-danger pt-0 mb-0 pb-0"
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          {errors}
        </p>
      )}
    </React.Fragment>
  );
};

export default Input;
