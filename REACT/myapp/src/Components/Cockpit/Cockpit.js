import React, {useEffect} from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("cockpit.js - use effect.");
    //http request...
    setTimeout(() => {
      alert('saved data to cloud');
    }, 1000);
    return () => {
      console.log("use effect clean up ");
    }
  }, []);

  //second argument of useeffect will contain for which elements u want to run that. if it is empt, it will only execute during the reload only.

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
