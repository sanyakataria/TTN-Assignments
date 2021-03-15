import React from "react";
import burgerLogo from "../../assets/Images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="mylogo" style={{ height: props.height }} />
    </div>
  );
};

export default logo;
