import { useData } from "../DataContext";

const FinishedScreen = () => {
  const { points, maxPoints, dispatch } = useData();
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPoints}{" "}
        {Math.ceil(percentage)}%{" "}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishedScreen;
