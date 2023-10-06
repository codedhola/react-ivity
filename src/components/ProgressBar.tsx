import React from "react";

type Props = {
  index: any;
  numQuestion: any;
  points: number;
  maxPoints: number;
  answer: number | null;
};

const ProgressBar = ({
  index,
  numQuestion,
  points,
  maxPoints,
  answer,
}: Props) => {
  console.log(points);
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question{" "}
        <strong>
          {index + 1} / {numQuestion}{" "}
        </strong>{" "}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
};

export default ProgressBar;
