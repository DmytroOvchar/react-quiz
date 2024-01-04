import React from "react";

export const NextButton = ({
  dispatch,
  answer,
  indexQuestions,
  numQuestions,
}) => {
  console.log(indexQuestions, numQuestions);
  if (answer === null) return null;
  if (indexQuestions < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (indexQuestions === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
};
