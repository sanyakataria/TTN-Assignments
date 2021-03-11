import React, { useState } from "react";
import "./App.css";
import Fruits from "./Fruits/Fruits";

function App() {
  const [fruitState, setFruitState] = useState({
    fruits: [],
  });

  const addRowHandler = (input_tag, name) => {
    console.log(name);
    input_tag.value = "";
    console.log(input_tag);
    var fname = name.split("-");
    console.log(fname);
    setFruitState({
      fruits: [
        ...fruitState.fruits,
        { id: name, name: fname[0], quantity: fname[1] },
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
    </div>
  );

  return (
    <div className="App">
      <input
        type="text"
        id="configname"
        name="configname"
        onKeyPress={(event) =>
          handleKeyPress(
            event,
            document.getElementById("configname"),
            document.getElementById("configname").value
          )
        }
      ></input>
      <br />
      <button
        onClick={() =>
          addRowHandler(
            document.getElementById("configname"),
            document.getElementById("configname").value
          )
        }
      >
        Submit
      </button>
      {fruits}
    </div>
  );
}

export default App;
