import React from "react";
import BurgerIngredient from "./Burgeringredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = (props) => {
  let tranformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(tranformedIngredients);
  console.log(tranformedIngredients.length);

  if (tranformedIngredients.length === 0) {
    tranformedIngredients = <p>Please start adding ingredients !</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {tranformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
