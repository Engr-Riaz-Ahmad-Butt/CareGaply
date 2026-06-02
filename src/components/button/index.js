import React from "react";

import style from "./button.module.scss";

const Button = ({ title, onClick, type = "button", disabled = false }) => {
  return (
    <button className={style.btn} onClick={onClick} type={type} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
