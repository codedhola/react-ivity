import { useData } from "../DataContext";

const NextButton = () => {
  const { answer, totalQuestion, current, dispatch } = useData();
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
