import React from "react";
import style from "./textarea.module.scss";

const Textarea = ({ name,label, placeholder, value, onChange, required }) => {
  return (
    <div className={style.textfield}>
      {label && <label>{label}</label>}
      <textarea
        name={name}
        placeholder={placeholder}
        rows={5}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Textarea;
