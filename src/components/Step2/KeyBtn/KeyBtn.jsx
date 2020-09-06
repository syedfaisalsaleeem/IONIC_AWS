import React from "react";

import { Button } from "@material-ui/core";
import "./KeyBtn.css";

const KeyBtn = (props) => {
  return (
    <Button
      className="KeyBtn"
      style={
        props.display === false ? { display: "none" } : { display: "block" }
      }
      value={props.value}
      onClick={props.value !== "x" ? props.clicked : props.clickedRemove}
    >
      <p>{props.txt}</p>
    </Button>
  );
};

export default KeyBtn;
