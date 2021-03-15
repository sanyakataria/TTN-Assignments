import React from "react";
// import Radium from "radium";
// import "./Person.css";
// import styled from "styled-components";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from '../../../hoc/withClass';

// function person(){}
// var person = function(){}

const person = (props) => {
  // stateless component

  return (
    // <div className="Person" style={style}>
    // <div className={classes.Person}>
    // inbuilt aux component in react -> <React.Fragment>
    <Aux>
      <p onClick={props.click}>
        my name is : {props.name}. my age is : {props.age}
      </p>
      <p>{props.children}</p>
      {/* children refers to text passed between opening and closing tag. */}
      <input type="text" onChange={props.changed} value={props.name}></input>
    </Aux>
    // </div>
    // </div>
  );
};

// export default Radium(person);
// export default person;
export default withClass(person, classes.Person);
