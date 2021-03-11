import React from "react";
import './Person.css'

// function person(){}
// var person = function(){}

const person = (props) => {
    // stateless component
  return (
    <div className="Person">
      <p onClick={props.click}>
        my name is : {props.name}. my age is : {props.age}
      </p>
      <p>{props.children}</p>
      {/* children refers to text passed between opening and closing tag. */}
      <input type="text" onChange = {props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
