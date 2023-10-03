import { useEffect, useReducer } from "react";
import "./App.css";
import Content from "./Content";
import Header from "./Header";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import StartPage from "./StartPage";

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
    case "failed":
      return { ...state, status: "failed" };

    default:
      throw new Error("An Error Occured in your reducer function");
  }
}

function App() {
  const [{ question, status }, dispatch] = useReducer(reducer, initalState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "success", payload: data }))
      .catch((err) => dispatch({ type: "failed", payload: err }));
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        {/* <DateCounter /> */}
      </div>
      <Content>
        {status === "loading" && <Loader />}
        {status === "failed" && <ErrorPage />}
        {status === "ready" && <StartPage />}
      </Content>
    </>
  );
}

export default App;
