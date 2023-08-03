import React from "react";

const Pizza = ({ pizzas }) => {
  return (
    <li className={`pizza ${pizzas.soldOut ? "sold-out" : ""}`}>
      <div>
        <img src={pizzas.photoName} alt={pizzas.name} />
        <div>
          <h3>{pizzas.name}</h3>
          <p>{pizzas.ingredients}</p>
          <span>{pizzas.soldOut ? "SOLD OUT" : pizzas.price}</span>
        </div>
      </div>
    </li>
  );
};

export default Pizza;
