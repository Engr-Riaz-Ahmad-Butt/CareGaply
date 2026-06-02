import React from "react";
import style from "./textfield.module.scss";

const Textfield = ({ name, type, placeholder, value, onChange, required }) => {
  return (
    <div className={style.textfield}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Textfield;
