import { useData } from "../DataContext";

const ProgressBar = () => {
  const { numQuestion, answer, maxPoints, points, current: index } = useData();
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
