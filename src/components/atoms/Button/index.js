import React from "react";
import "./button.css";

const Button = ({ title, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {title}
    </button>
  );
};

export default Button;
