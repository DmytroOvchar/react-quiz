import React from "react";

export const Progress = ({
  indexQuestions,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={indexQuestions + +(answer !== null)}
      />
      <p>
        Question <strong>{indexQuestions + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points} </strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};
