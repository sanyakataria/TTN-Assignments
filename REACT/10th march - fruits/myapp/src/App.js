import React, { useState } from "react";
import "./App.css";
import Fruits from "./Fruits/Fruits";

function App() {
  const [fruitState, setFruitState] = useState({
    fruits: [],
  });

  const addRowHandler = (event) => {
    event.preventDefault();
    console.log(event.target.configname.value);
    // input_tag.value = "";
    // console.log(input_tag);
    var fname = event.target.configname.value.split("-");
    console.log(fname);
    setFruitState({
      fruits: [
        ...fruitState.fruits,
        { id: event.target.configname, name: fname[0], quantity: fname[1] },
      ],
    });
    console.log(fruitState.fruits);
  };

  const handleKeyPress = (event, input_tag, value) => {
    console.log(event);
    if (event.charCode === 13) {
      console.log(event);

      addRowHandler(input_tag, value);
    }
  };

  const deleteFruitHandler = (index) => {
    const fruits2 = [...fruitState.fruits];
    fruits2.splice(index, 1);
    setFruitState({
      fruits: fruits2,
    });
  };

  var fruits = (
    <div>
      <table className="table">
        <tbody>
          {fruitState.fruits.map((fruit, index) => {
            return (
              <Fruits
                key={fruit.id}
                name={fruit.name}
                quantity={fruit.quantity}
                click={() => deleteFruitHandler(index)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <form className="App" onSubmit={(event) => addRowHandler(event)}>
      <input type="text" id="configname" name="configname"></input>
      <br />
      <button>Submit</button>
      {fruits}
    </form>
  );
}

export default App;
