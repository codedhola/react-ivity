import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [selector, setSelector] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      description,
      selector,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);
    setDescription("");
    setSelector(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={selector}
        onChange={(e) => Number(setSelector(e.target.value))}
      >
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}{" "}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Add Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
};

export default Form;
