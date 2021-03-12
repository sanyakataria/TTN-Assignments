import React, { useState } from "react";
// import Radium, { StyleRoot } from "radium";
// import styled from 'styled-components';
import "./App.css";
import Person from "./Person/Person";

function App() {
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
      persons: [
        { id: "asdfg", name: "max", age: "28" },
        { id: "qwert", name: "manu", age: "29" },
        { id: "zxcvb", name: "stephie", age: "26" },
      ],
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
      <div>
        {personState.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              click={() => deltePersonHandler(index)}
              key={person.id}
              changed={(event) => nameChangeHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
    {
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
    }

    //dynamically adding style
    // style.backgroundColor = "red";
    // done through radium
    // style[":hover"] = {
    //   backgroundColor: "pink",
    //   color: "black",
    // };
  }

  //dynamicaally adding classes
  let classes = [];

  if (personState.persons.length <= 2) {
    classes.push("red"); //classes=['red']
  }
  if (personState.persons.length <= 1) {
    classes.push("bold"); //classes=['red','bold']
  }

  return (
    // <StyleRoot>
    <div className="App">
      <h1>Hi, I am react app</h1>
      <p className={classes.join(" ")}>yayy, ths is working.</p>
      <button className="button"
        // alt={personState.showPersons}
        onClick={togglePersonsHandler}
      >
        Switch Name
      </button>
      {/* <Person></Person> == <Person/> */}
      {persons}
    </div>
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
export default App;
