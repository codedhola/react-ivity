import { useData } from "../DataContext";

const StartPage = () => {
  const { totalQuestion, dispatch } = useData();
  return (
    <div className="app">
      <h1>Welcome To the best Quiz Ever</h1>
      <h4>
        This quiz consist of {totalQuestion} games X is the bench score of 100%
      </h4>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "active" })}
      >
        Get Started
      </button>
    </div>
  );
};

export default StartPage;
