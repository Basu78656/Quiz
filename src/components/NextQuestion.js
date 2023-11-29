function NextQuestion({ dispatch, index, numOfQuestions, answer }) {
  if (answer === null) {
    return;
  }
  // || index > 1
  if (index < numOfQuestions - 1) {
    return (
      <>
        <button
          class="nxt_button"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </>
    );
  }
  if (index === numOfQuestions - 1) {
    return (
      <button class="nxt_button" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );
  }
}

export default NextQuestion;
