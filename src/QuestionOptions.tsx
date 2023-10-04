type Props = {
  question: any;
};

const QuestionOptions = ({ question }: Props) => {
  return (
    <>
      {question.options.map((el: any) => (
        <button className="btn btn-option" key={el}>
          {el}
        </button>
      ))}
    </>
  );
};

export default QuestionOptions;
