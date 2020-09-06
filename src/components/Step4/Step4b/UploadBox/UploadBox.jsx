import React from "react";

import "./UploadBox.css";

const UploadBox = (props) => {
  return (
    <div className="UploadBox">
      <img src={props.imgUrl} alt="" />
      <p>{props.txt}</p>
      {props.component}
    </div>
  );
};

export default UploadBox;
