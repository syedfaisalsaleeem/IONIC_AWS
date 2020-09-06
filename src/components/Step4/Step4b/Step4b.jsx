import React from "react";

import img1 from "../../../assets/EyeScan.png";
import img2 from "../../../assets/Passport.png";
import UploadBox from "./UploadBox/UploadBox";
import Button from "../../UI/Button/Button";

const Step4b = (props) => {
  return (
    <div className="Step4b">
      <UploadBox
        imgUrl={img2}
        txt="Biometric scan for identity verification"
        component={<div className="bg-pri box">View</div>}
      />
      <UploadBox
        imgUrl={img1}
        txt="Upload proof of identity document"
        component={
          <i
            style={{ color: "#030292", fontSize: "14px", marginRight: "20px" }}
            className="fas fa-arrow-right"
          ></i>
        }
      />
      <Button handleNext={props.handleNext}>Continue</Button>
    </div>
  );
};

export default Step4b;
