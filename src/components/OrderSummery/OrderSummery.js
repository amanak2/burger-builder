import React from "react";
import Aux from "../../hoc/Aux";

const ordeSummery = props => {
  const ingredientSummery = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>{ingredientSummery}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default ordeSummery;
