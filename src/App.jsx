import AddFriend from "./AddFriend";
import "./App.css";
import BillForm from "./BillForm";
import FriendList from "./FriendList";

function App() {
  return (
    <main className="app">
      <div className="sidebar">
        <FriendList />
        <AddFriend />
        <button className="button">select</button>
      </div>
      <BillForm />
    </main>
  );
}

export default App;
