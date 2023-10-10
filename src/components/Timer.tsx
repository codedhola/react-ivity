import { useEffect } from "react";

type Props = {
  dispatch: any;
  timeLeft: any;
};

const Timer = ({ dispatch, timeLeft }: Props) => {
  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
    },
    [dispatch]
  );

  return <div className="timer">{timeLeft}</div>;
};

export default Timer;
