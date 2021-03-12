import React from "react";
// import Radium from "radium";
// import "./Person.css";
import styled from "styled-components";

const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0px 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

// function person(){}
// var person = function(){}

const person = (props) => {
  // stateless component

  // const style = {
  //   "@media (min-width: 500px)": {
  //     width: "450px",
  //   },
  // };
  return (
    // <div className="Person" style={style}>
    <StyleDiv>
      <p onClick={props.click}>
        my name is : {props.name}. my age is : {props.age}
      </p>
      <p>{props.children}</p>
      {/* children refers to text passed between opening and closing tag. */}
      <input type="text" onChange={props.changed} value={props.name}></input>
      </StyleDiv>
    // </div>
  );
};

// export default Radium(person);
export default person;
