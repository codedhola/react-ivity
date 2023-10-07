import React from "react";
import FinishedScreen from "./FinishedScreen";

type Props = {
  dispatch: any;
  answer: any;
  totalQuestion: any;
  current: any;
};

const NextButton = ({ dispatch, answer, totalQuestion, current }: Props) => {
  if (answer === null) return null;

  if (current < totalQuestion - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        NextButton
      </button>
    );
  }
  if (current === totalQuestion - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish Quiz
      </button>
    );
  }
};

export default NextButton;
