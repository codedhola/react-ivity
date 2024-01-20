import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

interface Props {
  children: ReactNode;
}

const DataContext = createContext<null | any>(null);

const SECS_PER_QUESTION = 30;

const initalState = {
  questions: [],
  status: "loading",
  current: 0,
  answer: null,
  timeLeft: null,
  points: 0,
};

type ACTION = {
  type:
    | "success"
    | "failed"
    | "active"
    | "newAnswer"
    | "nextQuestion"
    | "finished"
    | "start"
    | "tick";
  payload: any;
};
// | {
//     type: string;
//     payload: any;
//   };

function reducer(state: any, action: ACTION) {
  switch (action.type) {
    case "success":
      return { ...state, questions: action.payload, status: "ready" };
    case "failed":
      return { ...state, status: "failed" };
    case "active":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.current);
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
    case "finished":
      return { ...state, status: "finished" };
    case "tick":
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
        status: state.timeLeft == 0 ? "finished" : state.status,
      };
    case "start":
      return {
        ...initalState,
        status: "ready",
        questions: state.questions,
        timeLeft: state.questions.length * SECS_PER_QUESTION,
      };
    default:
      throw new Error("An Error Occured in your reducer function");
  }
}

export function DataProvider({ children }: Props) {
  const [{ questions, status, current, answer, points, timeLeft }, dispatch] =
    useReducer(reducer, initalState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "success", payload: data }))
      .catch((err) => dispatch({ type: "failed", payload: err }));
  }, []);

  const totalQuestion = questions.length;
  const maxPoints = questions.reduce(
    (pre: number, cur: any) => pre + cur.points,
    0
  );
  return (
    <DataContext.Provider
      value={{
        questions,
        status,
        current,
        answer,
        points,
        timeLeft,
        dispatch,
        totalQuestion,
        maxPoints,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}
