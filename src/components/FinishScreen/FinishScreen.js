import React from "react";

export const FinishScreen = ({ points, maxPossiblePoints, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let status;
  status =
    percentage >= 90
      ? "Excellent"
      : percentage >= 80
      ? "Very Good"
      : percentage >= 70
      ? "Good"
      : percentage >= 60
      ? "Average"
      : percentage >= 50
      ? "Fair"
      : "Poor";

  return (
    <>
      <p className="result">
        {status} You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)} %)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart
      </button>
    </>
  );
};
