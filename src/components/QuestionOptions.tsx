type Props = {
  question: any;
  dispatch: any;
  answer: number;
  status: any;
};

const QuestionOptions = ({ question, dispatch, answer, status }: Props) => {
  const isAnswered = answer !== null;

  return (
    <>
      {question.options.map((el: any, index: number) => (
        <button
          className={`btn btn-option ${status === "newAnswer"}
              ?  ${index === answer ? "answer" : ""} ${
            isAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }
              : "btn btn-option"
          `}
          key={el}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={answer !== null}
        >
          {el}
        </button>
      ))}
    </>
  );
};

export default QuestionOptions;
