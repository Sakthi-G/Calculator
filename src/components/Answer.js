import React from "react";

const Answer = ({ expression, result }) => {
  let finalAnswer = "";
  if (isNaN(result)) finalAnswer = "Invalid";
  else finalAnswer = result;
  return (
    <>
      <div className="calculations">
        <div className="calculation-area">
          <div className="expresions"> {expression}</div>
          <div className="answer">{"= " + finalAnswer}</div>
        </div>
      </div>
    </>
  );
};

export default Answer;
