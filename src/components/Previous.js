function Previous({ dispatch, index, numOfQuestions, answer }) {
  if (answer === null) {
    return;
  }
  if (index < numOfQuestions - 1) {
    return (
      <>
        <button
          class="nxt_button"
          onClick={() => dispatch({ type: "prevQuestion" })}
        >
          prev
        </button>
      </>
    );
  }
}

export default Previous;
