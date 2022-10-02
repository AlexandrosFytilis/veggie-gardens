import React from "react";

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

export default TextInput;
