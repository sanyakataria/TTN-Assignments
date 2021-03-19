import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      {/* <NavigationItem link="/checkout">Checkout</NavigationItem> */}
      <NavigationItem link="/orders">My Orders</NavigationItem>
    </ul>
  );
};

export default navigationItems;
