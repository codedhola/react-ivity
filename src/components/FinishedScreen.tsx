import React from "react";

type Props = {
  points: any;
  maxPoints: any;
  dispatch: any;
};

const FinishedScreen = ({ points, maxPoints, dispatch }: Props) => {
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
