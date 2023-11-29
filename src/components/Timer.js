import { useEffect } from "react";

function Timer({ dispatch, secondReamining }) {
  const mins = Math.floor(secondReamining / 60);
  const sec = secondReamining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <span className="timer">
      {mins < 10 && "0"}
      {mins}: {sec < 10 && "0"}
      {sec}
    </span>
  );
}

export default Timer;
