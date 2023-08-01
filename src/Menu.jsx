import React from "react";
import pizzaData from "./data";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza pizzas={pizzaData} />
    </main>
  );
};
export default Menu;
