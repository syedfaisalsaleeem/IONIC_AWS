import React, { useState } from "react";

import Step3a from "./Step3a/Step3a";
import Step3b from "./Step3b/Step3b";

const Step3 = (props) => {
  const [redirect, setRedirect] = useState(false);
  const redirectHandler = () => {
    setRedirect(true);
  };
  return (
    <div>
      {!redirect ? <Step3a onRedirect={redirectHandler} /> : <Step3b handleNext={props.handleNext}/>}
    </div>
  );
};

export default Step3;
