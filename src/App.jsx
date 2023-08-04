import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./Form";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleClearList() {
    const confirm = window.confirm("Are you sure you want to Clear you list?");
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
