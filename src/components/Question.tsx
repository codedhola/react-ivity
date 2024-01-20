import { useData } from "../DataContext";
import QuestionOptions from "./QuestionOptions";

const Question = () => {
  const { questions, current } = useData();
  return (
    <div>
      <h2>{questions[current].question}</h2>
      <div className="options">
        <QuestionOptions />
      </div>
    </div>
  );
};

export default Question;
