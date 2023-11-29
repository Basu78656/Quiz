function Finished({ points, maxPoints, highScore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = `😁`;
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦";
  return (
    <>
      <div className="finish">
        <p>
          {emoji} You scored <strong>{points}</strong> out off{" "}
          <strong>{maxPoints}</strong> ({Math.ceil(percentage)}%)
        </p>
      </div>
      <button className="btn" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  );
}

export default Finished;
