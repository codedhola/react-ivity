import React from "react";

type Props = {
  dispatch: any;
  answer: any;
};

const NextButton = ({ dispatch, answer }: Props) => {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      NextButton
    </button>
  );
};

export default NextButton;
