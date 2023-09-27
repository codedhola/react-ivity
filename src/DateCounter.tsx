import { ReactElement, useReducer, useState } from "react";

const initialState = { count: 0 };

type ACTION =
  | { type: "inc"; payload: number }
  | { type: "dec"; payload: number }
  | { type: "setCount"; payload: number };

function reducer(state: typeof initialState, action: ACTION) {
  console.log(state, action);
  switch (action.type) {
    case "inc":
      return { count: state.count + action.payload };
    case "dec":
      return { count: state.count + action.payload };
    case "setCount":
      return { count: action.payload };
    default:
      throw new Error();
  }
  // return { count: state.count + action.payload };
}

function DateCounter(): ReactElement {
  // const [count, setCount] = useState<number>(0);
  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(count);
  const [step, setStep] = useState<number>(1);

  // This mutates the date object.
  const date: Date = new Date("june 21 2027");
  date.setDate(date.getDate() + count.count);

  const dec = function () {
    // setCount((count) => count - step);
    dispatch({ type: "dec", payload: -1 });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = function (e: React.ChangeEvent<HTMLInputElement>): void {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>): void {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
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
        <input value={count.count} onChange={defineCount} />
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
