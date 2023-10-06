import { useEffect, useReducer } from "react";
import "../App.css";
import Content from "./Content";
import Header from "./Header";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import StartPage from "./StartPage";
import Question from "./Question";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";

const initalState = {
  questions: [],
  status: "loading",
  current: 0,
  answer: null,
  points: 0,
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

function reducer(state: any, action: ACTION) {
  switch (action.type) {
    case "success":
      return { ...state, questions: action.payload, status: "ready" };
    case "failed":
      return { ...state, status: "failed" };
    case "active":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, current: state.current + 1, answer: null };
    default:
      throw new Error("An Error Occured in your reducer function");
  }
}

function App() {
  const [{ questions, status, current, answer, points }, dispatch] = useReducer(
    reducer,
    initalState
  );

  const totalQuestions = questions.length;
  const maxPoints = questions.reduce(
    (pre: number, cur: any) => pre + cur.points,
    0
  );

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
        {status === "ready" && (
          <StartPage totalQuestion={totalQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <ProgressBar
              index={current}
              points={Number(points)}
              numQuestion={totalQuestions}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Question
              question={questions[current]}
              dispatch={dispatch}
              answer={answer}
              status={status}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Content>
    </>
  );
}

export default App;
