function Options({ questions, answer, dispatch }) {
  const hasAnswerd = answer !== null;
  return (
    <div className="options">
      {questions.options.map((options, index) => (
        <button
          className={`options_button ${index === answer ? "slected" : ""} ${
            hasAnswerd
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={options}
          disabled={hasAnswerd}
          onClick={() =>
            dispatch({ type: "newAnswer", payload: Number(index) })
          }
        >
          {options}
        </button>
      ))}
    </div>
  );
}

export default Options;
