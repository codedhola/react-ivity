import { useEffect, useReducer } from "react";
import "./App.css";
import Content from "./Content";
import Header from "./Header";

const initalState = {
  question: [],
  status: "loading",
};

type ACTION =
  | {
      type: string;
      payload: any;
    }
  | {
      type: string;
      payload: any;
    };

function reducer(state: typeof initalState, action: ACTION) {
  switch (action.type) {
    case "success":
      return { ...state, question: action.payload, status: "ready" };

    default:
      throw new Error("An Error Occured in your reducer function");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "success", payload: data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        {/* <DateCounter /> */}
      </div>
      <Content>
        <h1>hello</h1>
      </Content>
    </>
  );
}

export default App;
