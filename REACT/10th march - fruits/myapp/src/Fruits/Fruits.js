import React from "react";
import "./Fruits.css";

const Fruits = (props) => {
  console.log(props);

  return (
    <div>
      <tr className="row">
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td onClick={props.click}>delete</td>
      </tr>
    </div>
  );
};

export default Fruits;
