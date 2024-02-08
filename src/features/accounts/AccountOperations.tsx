import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState<any>("");
  const [withdrawalAmount, setWithdrawalAmount] = useState<any>("");
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [loanPurpose, setLoanPurpose] = useState<any>("");
  const [currency, setCurrency] = useState<any>("USD");

  const dispatch = useDispatch();

  const balance = useSelector((store: any) => store.account.balance);
  const loan = useSelector((store: any) => store.account.loan);

  function handleDeposit() {
    dispatch(deposit(depositAmount, currency));
    setDepositAmount(0);
  }

  function handleWithdrawal() {
    if (withdrawalAmount >= balance) return alert("Invalid withdrawal amount");
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount(0);
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    if (loan > 0)
      return alert(
        "Hello, please you need to payback all your loan before lending another"
      );
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount(0);
    setLoanPurpose("");
  }

  function handlePayLoan() {
    if (loan > balance) return alert("Insuffience funds to payload");
    dispatch(payLoan(loan));
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div>
          <span>Pay back ${loan} </span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
