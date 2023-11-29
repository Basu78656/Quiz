import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Footer from "./Footer";
import Timer from "./Timer";
import NextQuestion from "./NextQuestion";
import Progress from "./Progress";
import Finished from "./Finished";

const initailState = {
  questions: [],
  status: "loading",
  index: 0,
  points: 0,
  answer: null,
  highScore: 0,
  secondReamining: null,
  storeAnswer: [],
  newStoreAnswer: [],
};
let filteredQuestions = null;
const SECS_PER_QUESTOINS = 15;
function reducer(state, action) {
  switch (action.type) {
    case "dataRecevied":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondReamining: filteredQuestions.length * SECS_PER_QUESTOINS,
        type: action.quizType,
      };
    case "nextQuestion":
      let nextIndex = state.index + 1;
      let nextAnswer = state.newStoreAnswer[nextIndex];
      return { ...state, index: nextIndex, answer: nextAnswer || null };

    case "prevQuestion":
      const previousIndex = state.index - 1;
      const previousAnswer = state.newStoreAnswer[previousIndex];
      return {
        ...state,
        index: previousIndex,
        answer: previousAnswer || null,
      };

    case "newAnswer":
      const question = filteredQuestions.at(state.index);
      const updatedNewStoreAnswer = [...state.newStoreAnswer];
      updatedNewStoreAnswer[state.index] = action.payload; // Update the selected answer
      return {
        ...state,
        answer: action.payload,
        newStoreAnswer: updatedNewStoreAnswer,
        points:
          +action.payload === question.correctOption
            ? (state.points += question.points)
            : state.points,
      };

    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return { ...initailState, status: "ready", questions: state.questions };
    case "tick":
      return {
        ...state,
        secondReamining: state.secondReamining - 1,
        status: state.secondReamining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action is unknown");
  }
}

function App() {
  let [
    {
      questions,
      status,
      index,
      answer,
      points,
      highScore,
      secondReamining,
      type,
    },
    dispatch,
  ] = useReducer(reducer, initailState);
  filteredQuestions = questions.filter((question) => question.type === type);
  const numOfQuestions = filteredQuestions?.length;
  const maxPoints = filteredQuestions?.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  useEffect(function () {
    fetch(`https://quiz-9ny5.onrender.com/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecevied", payload: data }))
      .catch((err) => {
        dispatch({ type: "dataFailed" });
        console.log(err);
      });
  }, []);
  return (
    <div className="app">
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <>
            <Header />
            <StartScreen dispatch={dispatch} numOfQuestions={numOfQuestions} />
          </>
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numOfQuestions={numOfQuestions}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />

            <Question
              questions={filteredQuestions[index]}
              answer={answer}
              dispatch={dispatch}
              index={index}
            />
            <Footer>
              <Timer dispatch={dispatch} secondReamining={secondReamining} />
              <NextQuestion
                dispatch={dispatch}
                index={index}
                numOfQuestions={numOfQuestions}
                answer={answer}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <Finished
            points={points}
            maxPoints={maxPoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
