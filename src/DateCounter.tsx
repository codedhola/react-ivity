import { ReactElement, useReducer } from "react";

const initialState = { count: 0, step: 1 };

type ACTION =
  | { type: "inc"; payload: number }
  | { type: "dec"; payload: number }
  | { type: "setCount"; payload: number }
  | { type: "setStep"; payload: number }
  | { type: "reset" };

function reducer(state: typeof initialState, action: ACTION) {
  console.log(state, action);
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { ...state, count: 1, step: 1 };
    default:
      throw new Error("Error Occured in 'useReducer' function");
  }
}

function DateCounter(): ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  const date: Date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", payload: -1 });
  };

  const inc = function () {
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = function (e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
