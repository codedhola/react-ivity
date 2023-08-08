import React, { useState } from "react";

const BillForm = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const paidByFriend = bill ? bill - expense : "";
  const [payer, setPayer] = useState("friend");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !expense) return alert("Please Input a Bill and Expense");

    onSplitBill(payer === "user" ? paidByFriend : -expense);
  }

  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
      <h2>Split a Bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>💲 Your Expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />

      <label>🤑 {selectedFriend.name} expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>👨 Who is paying Today</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <button className="button">Split</button>
    </form>
  );
};

export default BillForm;
