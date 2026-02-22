import React, { useState } from "react";

const message = ["Learn React", "Apply for Job", "Invest your new Income"];

const Guide = () => {
  let [step, setStep] = useState(1);
  console.log(step);

  function previousStep() {
    console.log(step);
    setStep(--step);
  }

  function nextStep() {
    console.log(step);
    setStep(++step);
  }

  return (
    <>
      <div className="container">
        <div className="number-parent">
          <span className={`${step >= 1 ? "active" : ""}`}>1</span>
          <span className={`${step >= 2 ? "active" : ""}`}>2</span>
          <span className={`${step >= 3 ? "active" : ""}`}>3</span>
        </div>
        <h1>
          Step {step}: {message[step - 1]}
        </h1>
        <div className="button-parent">
          <button onClick={previousStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Guide;
