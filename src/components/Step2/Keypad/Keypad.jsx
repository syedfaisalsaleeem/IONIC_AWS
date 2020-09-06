import React from "react";

import KeyBtn from "../KeyBtn/KeyBtn";
import { IonGrid, IonRow, IonCol, IonText } from "@ionic/react";
import Button from "../../UI/Button/Button";
import "./Keypad.css";

const data = [
  [{ txt: "1" }, { txt: "2" }, { txt: "3" }],
  [{ txt: "4" }, { txt: "5" }, { txt: "6" }],
  [{ txt: "7" }, { txt: "8" }, { txt: "9" }],
  [{ txt: "", display: false }, { txt: "0" }, { txt: "x" }],
];

const Keypad = (props) => {
  return (
    <div className="Keypad">
      <div className="passTitle">
        <h1>{props.title}</h1>
      </div>
      <div className="passDots">
        {props.dots.map((el) => {
          return (
            <div
              key={el.id}
              className={el.status ? ["dot", "bg-pri"].join(" ") : "dot"}
            ></div>
          );
        })}
      </div>
      <div className="Keypad">
        <IonGrid>
          {data.map((el, id) => {
            return (
              <IonRow
                className="ion-justify-content-center ion-margin-bottom"
                key={id}
              >
                {el.map((item, id) => {
                  return (
                    <IonCol size="4" key={id}>
                      <KeyBtn
                        display={item.display}
                        txt={item.txt}
                        value={item.txt}
                        clicked={() =>
                          props.codeHandler(
                            item.txt,
                            props.number,
                            "add",
                            props.setFunc,
                            props.setDotFunc,
                            props.length
                          )
                        }
                        clickedRemove={() =>
                          props.codeHandler(
                            item.txt,
                            props.number,
                            "remove",
                            props.setFunc,
                            props.setDotFunc,
                            props.length
                          )
                        }
                      />
                    </IonCol>
                  );
                })}
              </IonRow>
            );
          })}
          {props.error && (
            <IonText color="danger">
              <p
                style={
                  props.errorMessage
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                Password Not match
              </p>
            </IonText>
          )}
        </IonGrid>
      </div>
      <Button
        handleNext={props.handleNext}
        disabled={props.number.length >= 4 && !props.error ? false : true}
      >
        Continue
      </Button>
    </div>
  );
};

export default Keypad;
