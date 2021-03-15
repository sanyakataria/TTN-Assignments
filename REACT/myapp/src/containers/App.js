import React, { useState } from "react";
// import Radium, { StyleRoot } from "radium";
// import styled from 'styled-components';
// import classes from "./App.css";
// *******section5-video73 css modules not working due to  react-script version difference. he used version 1.0 and i have version 4.0.
// in case react script version is greater than 2. then you just have to rename css file to app.module.css and it will work automatically. no need to eject.
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

function App(props) {
  // stateful component

  const [personState, setpersonsState] = useState({
    persons: [
      { id: "asdfg", name: "max", age: "28" },
      { id: "qwert", name: "manu", age: "29" },
      { id: "zxcvb", name: "stephie", age: "26" },
    ],
    otherState: "some other value",
    showPersons: false,
  });

  console.log(personState);

  const switchNameHandler = (newname) => {
    console.log("was clicked");
    //DONT DO THIS. WE CANNOT MUTATE STRING state.persons[0].name = "maximillian"
    setpersonsState({
      persons: [
        { name: newname, age: "28" },
        { name: "manu", age: "29" },
        { name: "stephie", age: "27" },
      ],
      showPersons: false,
    });
  };

  const nameChangeHandler = (event, id) => {
    const personIndex = personState.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...personState.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIndex] = person;

    setpersonsState({
      persons: persons,
      showPersons: true,
    });
  };

  const togglePersonsHandler = () => {
    const doesShow = personState.showPersons;
    setpersonsState({
      ...personState,
      // persons: [
      //   { id: "asdfg", name: "max", age: "28" },
      //   { id: "qwert", name: "manu", age: "29" },
      //   { id: "zxcvb", name: "stephie", age: "26" },
      // ],
      showPersons: !doesShow,
    });
  };

  const deltePersonHandler = (personIndex) => {
    const persons = [...personState.persons];
    console.log(personIndex);
    persons.splice(personIndex, 1);
    console.log(persons);
    setpersonsState({
      persons: persons,
      showPersons: true,
    });
  };
  //styled component
  // const StyledButton = styled.button`
  // background-color: ${(props) => (props.alt ? "red" : "green")};
  //   color:white;
  //   font: inherit;
  //   border: 3px solid blue;
  //   padding: 8px;
  //   cursor: pointer;

  //    &:hover {
  //     background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
  //      color: black
  //    },
  // `;

  //inline style
  // const style = {
  //   backgroundColor: "green",
  //   color: "white",
  //   font: "inherit",
  //   border: "3px solid blue",
  //   padding: "8px",
  //   cursor: "pointer",
  //   // done through radium
  //   // ":hover": {
  //   //   backgroundColor: "lightgreen",
  //   //   color: "black",
  //   // },
  // };

  var persons = null;
  if (personState.showPersons) {
    persons = (
      <Persons
        persons={personState.persons}
        clicked={deltePersonHandler}
        changed={nameChangeHandler}
      />
    );

    //dynamically adding style
    // style.backgroundColor = "red";
    // done through radium
    // style[":hover"] = {
    //   backgroundColor: "pink",
    //   color: "black",
    // };

  }

  //dynamicaally adding classes

  return (
    // <StyleRoot>
    // <div className={classes.App}>
    <Aux>
      <Cockpit
        title={props.appTitle}
        showPersons={personState.showPersons}
        persons={personState.persons}
        clicked={togglePersonsHandler}
      />
      {persons}
      </Aux>
    // </div>
    // </StyleRoot>
  );

  // return (React.createElement(
  //   "div",
  //   { className: App },
  //   React.createElement("h1",null, "hello i am sanya")
  // ));
  // javascript object to be passed in space of null
}

// export default Radium(App);
// export default App;
export default withClass(App, classes.App);

/* <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
        />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
          click={switchNameHandler.bind(this, "maxilmillian")}
          changed={nameChangeHandler}
        >
          my hobbies : racing.
          </Person>
          <Person
          name={personState.persons[2].name}
          age={personState.persons[2].age}
        /> */
