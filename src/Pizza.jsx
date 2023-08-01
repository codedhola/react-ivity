import React from "react";

const Pizza = ({ pizzas }) => {
  return (
    <div>
      {pizzas.map((pizza) => (
        <div className="pizza">
          <img src={pizza.photoName} alt={pizza.name} />
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>{pizza.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pizza;
