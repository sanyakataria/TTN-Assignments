import React from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  let assignClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignClasses.push(classes.red); //assignClasses=['red']
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold); //assignClasses=['red','bold']
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(" ")}>yayy, ths is working.</p>
      <button
        className={btnClass}
        // alt={personState.showPersons}
        onClick={props.clicked}
      >
        Switch Name
      </button>
    </div>
  );
};

export default Cockpit;
