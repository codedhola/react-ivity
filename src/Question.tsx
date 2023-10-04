import QuestionOptions from "./QuestionOptions";

type Props = {
  question: any;
};

const Question = ({ question }: Props) => {
  console.log(question);
  return (
    <div>
      <h2>{question.question}</h2>
      <div className="options">
        <QuestionOptions question={question} />
      </div>
    </div>
  );
};

export default Question;
