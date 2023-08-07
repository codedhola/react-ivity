import React from "react";

const BillForm = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a Bill with X</h2>

      <label>Bill Value</label>
      <input type="text" />

      <label>Your Expense</label>
      <input type="text" />

      <label>X expense</label>
      <input type="text" disabled />

      <label>Who is paying Today</label>
      <select>
        <option value="user">You</option>
        <option value="friend">x</option>
      </select>
      <button className="button">Split</button>
    </form>
  );
};

export default BillForm;
