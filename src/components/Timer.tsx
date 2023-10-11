import { useEffect } from "react";

type Props = {
  dispatch: any;
  timeLeft: any;
};

const Timer = ({ dispatch, timeLeft }: Props) => {
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
