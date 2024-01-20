import { useData } from "../DataContext";

const QuestionOptions = () => {
  const { answer, questions, dispatch, current, status } = useData();
  const isAnswered = answer !== null;
  const question = questions[current];
  console.log(question);

  const start = (e: any, index: any) => {
    e.preventDefault();
    dispatch({ type: "newAnswer", payload: index });
  };

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
          onClick={(e) => start(e, index)}
          disabled={answer !== null}
        >
          {el}
        </button>
      ))}
    </>
  );
};

export default QuestionOptions;
