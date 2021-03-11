import React, { useState } from "react";
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

  //inline style
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "3px solid blue",
    padding: "8px",
    cursor: "pointer",
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
        {/* <Person
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
        /> */}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I am react app</h1>
      <p>yayy, ths is working.</p>
      {/* dont use the below syntax that is inefficient.,use bind that is present in line 45. */}
      <button style={style} onClick={togglePersonsHandler}>
        Switch Name
      </button>
      {/* <Person></Person> == <Person/> */}
      {persons}
    </div>
  );

  // return (React.createElement(
  //   "div",
  //   { className: App },
  //   React.createElement("h1",null, "hello i am sanya")
  // ));
  // javascript object to be passed in space of null
}

export default App;
