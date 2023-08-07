import React from "react";

const AddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>Add a friend</label>
      <input type="text" />
      <label>Image URL</label>
      <input type="text" />

      <button className="button">Add</button>
    </form>
  );
};

export default AddFriend;
