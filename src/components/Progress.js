function Progress({ index, numOfQuestions, points, maxPoints, answer }) {
  return (
    <>
      <div className="progress-container">
        <progress
          max={numOfQuestions}
          value={index + Number(answer !== null)}
        ></progress>
      </div>
      <div className="description">
        <span className="left_question">
          Question <strong>{index + 1}</strong> /{" "}
          <strong>{numOfQuestions}</strong>
        </span>
        <span className="points">
          <strong>{points}</strong> / <strong>{maxPoints}</strong>
        </span>
      </div>
    </>
  );
}

export default Progress;
