import React, { useState } from "react";

const AddFriend = ({ onAddFriend }) => {
  const [name, setname] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return alert("Please Input a username and image");

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      id,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setname("");
    setimage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Add a friend</label>
      <input
        type="text"
        value={name}
        placeholder="friend name`"
        onChange={(e) => setname(e.target.value)}
      />
      <label>Image URL</label>
      <input
        type="text"
        value={image}
        placeholder="friend name`"
        onChange={(e) => setimage(e.target.value)}
      />

      <button className="button">Add</button>
    </form>
  );
};

export default AddFriend;
