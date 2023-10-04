import React, { ReactElement } from "react";

type Props = {
  question: any;
};

const Question = ({ question }: Props) => {
  console.log(question);
  return (
    <div>
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((el: any) => (
          <button className="btn btn-option">{el}</button>
        ))}
      </div>
    </div>
  );
};

export default Question;
