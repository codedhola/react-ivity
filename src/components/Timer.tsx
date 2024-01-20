import { useEffect } from "react";
import { useData } from "../DataContext";

const Timer = () => {
  const { timeLeft, dispatch } = useData();
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return <div className="timer">{timeLeft}</div>;
};

export default Timer;
