import { useState } from "react";
import AddFriend from "./AddFriend";
import "./App.css";
import BillForm from "./BillForm";
import FriendList from "./FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriends, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleShowAddFriend() {
    setShowAddFriend((val) => !val);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <main className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showAddFriends && <AddFriend onAddFriend={handleAddFriends} />}
        <button className="button" onClick={handleShowAddFriend}>
          {!showAddFriends ? "ADD" : "X"}
        </button>
      </div>
      <BillForm />
    </main>
  );
}

export default App;
