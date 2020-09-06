import React, { useState } from "react";

import Step4a from "./Step4a/Step4a";
import Step4b from "./Step4b/Step4b";
import "./Step4.css";

const Step4 = (props) => {
  const [valid, setValid] = useState(false);
  return (
    <div className="Step4">
      <div className="titleVerification">
        <h3>Your Identity Verification</h3>
      </div>
      {!valid ? (
        <Step4a setValid={setValid} />
      ) : (
        <Step4b handleNext={props.handleNext} />
      )}
    </div>
  );
};

export default Step4;
