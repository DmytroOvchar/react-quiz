import React from "react";

export const Options = ({ currentQuestion, dispatch, answer }) => {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {currentQuestion.options.map((option, i) => (
        <button
          disabled={hasAnswer}
          key={option}
          className={`btn btn-option ${answer === i ? "answer" : ""} ${
            hasAnswer
              ? i === currentQuestion.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
