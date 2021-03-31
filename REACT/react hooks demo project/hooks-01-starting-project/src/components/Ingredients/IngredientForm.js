import React, { useState } from "react";
import Card from "../UI/Card";
import "./IngredientForm.css";
import LoadingIndicator from '../UI/LoadingIndicator';

const IngredientForm = React.memo((props) => {
  // const [inputState, setInputState] = useState({
  //   title: "",
  //   amount: "",
  // });

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(props);
    console.log(enteredTitle,enteredAmount);
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={(event) => setEnteredTitle(event.target.value)}
              // onChange={(event) => {
              //   const newTitle = event.target.value;
              //   setInputState((prevInputState) => ({
              //     title: newTitle,
              //     amount: prevInputState.amount,
              //   }));
              // }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={(event) => setEnteredAmount(event.target.value)}
              // onChange={(event) => {
              //   const newAmount = event.target.value;
              //   setInputState((prevInputState) => ({
              //     title: prevInputState.title,
              //     amount: newAmount,
              //   }));
              // }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading ? <LoadingIndicator/> : null}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
