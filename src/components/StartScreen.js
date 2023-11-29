function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <>
      <header>
        <p>Challenge your knowledge with fun and exciting quizzes.</p>
        <p>There are total 20 Questions in each Quize's section</p>
      </header>
      <div className="choose_quiz">
        <div className="js-quiz">
          <button
            key={"javascript"}
            onClick={() => dispatch({ type: "start", quizType: "javascript" })}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYcaP4dclUt-JrDkk1DVPEOeTLj-UodOesHlKcZvBgDTno-M47_c4ZR5yqMJiuGI8Zv0&usqp=CAU"
              alt="js"
            />
          </button>
        </div>
        <div className="py-quiz">
          <button
            key={"python"}
            onClick={() => dispatch({ type: "start", quizType: "python" })}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkcAME8o4B6FEM_dE_HyLtTZWbtbPWOaUk1hs6fi-k&s" />
          </button>
        </div>
        <div className="mern-quiz">
          <button
            key={"MERN"}
            onClick={() => dispatch({ type: "start", quizType: "MERN" })}
          >
            <img src="https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png" />
          </button>
        </div>
        <div className="webdev-quiz">
          <button
            key={"react"}
            onClick={() => dispatch({ type: "start", quizType: "react" })}
          >
            <img
              src="https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg"
              alt="react"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default StartScreen;
