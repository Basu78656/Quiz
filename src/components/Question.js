import Options from "./Options";
function Question({ questions, answer, dispatch, index }) {
  return (
    <>
      <div className="question">
        <p>
          <span>{index + 1}. </span>
          {questions.question}
        </p>
      </div>
      <Options questions={questions} answer={answer} dispatch={dispatch} />
    </>
  );
}

export default Question;
