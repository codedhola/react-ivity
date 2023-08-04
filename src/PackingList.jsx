import React from "react";
import Items from "./Items";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div className="list">
      <h2>PackingList</h2>
      <ul>
        {items.map((item) => (
          <Items
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
