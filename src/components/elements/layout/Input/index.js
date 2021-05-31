import PropTypes from "prop-types";
import { useState } from "react";
import Classes from "./input.module.scss";

const Input = ({
  icon,
  iconPosition,
  size,
  variant,
  primary,
  rounded,
  placeholder,
  type,
  className,
  containerClass,
  containerStyle,
  handleOnchange,
  ...reset
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={containerClass + " " + Classes.container}>
      {icon && iconPosition === "left" && (
        <div className={`${Classes.icon} ${Classes[iconPosition]}`}>
          <img src={icon} />
        </div>
      )}
      <input
        autoComplete="off"
        // onChange={(e)=> handleOnchange(e)}
        placeholder={placeholder}
        className={`${className} ${Classes.wrap} ${Classes[size]} 
            ${Classes[variant]} ${primary && Classes.primary} ${
          rounded && Classes.rounded
        }`}
        {...reset}
      />
      {icon && iconPosition === "right" && (
        <div className={`${Classes.icon} ${Classes[iconPosition]}`}>
          <img src={icon} />
        </div>
      )}
      {type === "password" && (
        <div className={`${Classes.icon} ${Classes.iconPosition}`}></div>
      )}
    </div>
  );
};

Input.defaultProps = {
  placeholder: "",
  icon: "",
  iconPosition: "right",
  size: "md",
  variant: "normal",
  primary: false,
  rounded: false,
  type: "text",
  reset: "",
  className: "",
  containerClass: "",
  // handleOnchange:()=>{}
};

Input.prototype = {
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  containerClass: PropTypes.string,
  iconPosition: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  primary: PropTypes.bool,
  rounded: PropTypes.bool,
  type: PropTypes.string,
  reset: PropTypes.any,
  // handleOnchange:PropTypes.func,
};

export default Input;
