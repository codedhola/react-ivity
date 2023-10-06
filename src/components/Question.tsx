import QuestionOptions from "./QuestionOptions";

type Props = {
  question: any;
  dispatch: any;
  answer: number;
  status: any;
};

const Question = ({ question, dispatch, answer, status }: Props) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <div className="options">
        <QuestionOptions
          question={question}
          dispatch={dispatch}
          answer={answer}
          status={status}
        />
      </div>
    </div>
  );
};

export default Question;
