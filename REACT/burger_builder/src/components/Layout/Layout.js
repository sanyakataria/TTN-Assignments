import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

const Layout = (props) => {
 const [sideDrawerIsVisible, setSideDrawerisVisible] = useState(false);

  const sideDrawerClosedhandler = () => {
    // this.setState({ showSideDrawer: false });
    setSideDrawerisVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    // this.setState((prevState) => {
    //   return { showSideDrawer: !prevState.showSideDrawer };
    // });
    setSideDrawerisVisible(!sideDrawerIsVisible)
  };

  return (
    <Aux>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedhandler}
      />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
