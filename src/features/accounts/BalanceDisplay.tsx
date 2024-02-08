import { useSelector } from "react-redux";

function formatCurrency(value: any) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store: any) => store.account.balance);

  console.log("Balance ", balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
