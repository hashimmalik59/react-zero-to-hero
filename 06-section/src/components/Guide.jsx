import React, { useState } from "react";

const message = ["Learn React", "Apply for Job", "Invest your new Income"];

const Guide = () => {
  const [step, setStep] = useState(1);
  const [isClose, setIsClose] = useState(true);

  function previousStep() {
    if (step > 1) {
      // setStep((s) => s - 1);
      // setStep((s) => s - 1);

      setStep(step - 1);
    }
  }

  function nextStep() {
    if (step < 3) {
      // setStep((s) => s + 1);
      // setStep((s) => s + 1);

      setStep(step + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsClose(!isClose)}>
        &times;
      </button>
      {isClose && (
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
      )}
    </>
  );
};

export default Guide;
