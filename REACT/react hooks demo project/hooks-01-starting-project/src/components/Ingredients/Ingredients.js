import React, { useState, useEffect, useCallback, useReducer, useMemo } from "react";
import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("we should not reach this default case");
  }
};

const Ingredients = () => {
  // [] (2nd argument) => is the starting state.
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifer,
    clear,
  } = useHttp();
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsloading] = useState(false);
  // const [error, setError] = useState();

  //this use-effect and the use-effect present in search component are doing the same work
  // when the search box is empty and hence we are making two get request for the same data
  // and therefore we can avoid this

  // useEffect(() => {
  //   console.log("ingredient.js get request USE-EFFECT");
  //   fetch("https://react-hooks-3c5b5-default-rtdb.firebaseio.com/ingredients.json")
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       const loadedIngredients = [];
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         });
  //       }
  //       setUserIngredients(loadedIngredients);
  //     });
  // }, []);

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifer === "ADD_INGREDIENT") {
      dispatch({
        type: "ADD",
        ingredient: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifer, isLoading, error]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      console.log(userIngredients);
      sendRequest(
        "https://react-hooks-3c5b5-default-rtdb.firebaseio.com/ingredients.json",
        "POST",
        JSON.stringify(ingredient),
        ingredient,
        "ADD_INGREDIENT"
      );
    },
    [sendRequest]
  );
  // dispatchhttp({ type: "SEND" });
  // //browser function -  by default fetch will send a get request. but here we want the post request.
  // fetch("https://react-hooks-3c5b5-default-rtdb.firebaseio.com/ingredients.json", {
  //   method: "POST",
  //   body: JSON.stringify(ingredient),
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then((response) => {
  //     dispatchhttp({ type: "RESPONSE" });
  //     console.log(response);
  //     //it will extract the body and convert the json to normal js
  //     return response.json();
  //   })
  //   .then((responseData) => {
  //     console.log(responseData);
  //     // setUserIngredients((prevIngredients) => [
  //     //   ...prevIngredients,
  //     //   { id: responseData.name, ...ingredient },
  //     // ]);
  //     dispatch({
  //       type: "ADD",
  //       ingredients: { id: responseData.name, ...ingredient },
  //     });
  //   });
  // }, []);

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      sendRequest(
        `https://react-hooks-3c5b5-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
        "DELETE",
        null,
        ingredientId,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

  // const clearError = useCallback(() => {
  //   // dispatchhttp({ type: "CLEAR" });
  // },[]);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
