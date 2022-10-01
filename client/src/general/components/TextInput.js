import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ setForm, label, type, formKey }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={label}
        onChange={(e) => setForm((current) => ({ ...current, [formKey]: e.target.value }))}
      />
    </div>
  );
};

TextInput.propTypes = {
  setForm: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  formKey: PropTypes.string
};

export default TextInput;
