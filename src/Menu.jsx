import React from "react";
import pizzaData from "./data";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzas={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <h2> No Pizza in database</h2>
      )}
    </main>
  );
};
export default Menu;
