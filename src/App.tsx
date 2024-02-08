import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import "./index.css";
import { useSelector } from "react-redux";

function App() {
  const registered = useSelector((store: any) => store.customer).fullName;

  console.log(registered);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!registered ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
