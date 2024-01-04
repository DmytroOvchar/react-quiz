import React from "react";
import { Options } from "./Option/Options";

const Question = ({ currentQuestion, dispatch, answer }) => {
  return (
    <div>
      <h4>{currentQuestion.question}</h4>
      <Options
        currentQuestion={currentQuestion}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
};

export default Question;
