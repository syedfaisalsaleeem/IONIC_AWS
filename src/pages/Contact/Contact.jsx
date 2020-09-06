import React from "react";

import { Button } from "@material-ui/core";
import {
  IonGrid,
  IonRow,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonInput,
} from "@ionic/react";
import imgArr from "../../assets/arrow.png";
import "./Contact.css";

const inputData = [
  { label: "Your Full Name", type: "text" },
  { label: "Your Contact Email", type: "email" },
  { label: "Your Contact Number", type: "number" },
];

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contactHeader"></div>
      <div className="backBtn">
        <Button>
          <img src={imgArr} alt="" />
        </Button>
        <p>Back</p>
      </div>
      <div className="contactTitle">
        <h1>Contact Us</h1>
      </div>
      <IonGrid>
        <IonRow>
          <IonItem className="contactSelect ion-margin-horizontal">
            <IonLabel color="secondary" className="label">
              Select Inquiry Type
            </IonLabel>
            <IonSelect interface="popover">
              <IonSelectOption>Option1</IonSelectOption>
              <IonSelectOption>Option2</IonSelectOption>
            </IonSelect>
          </IonItem>

          {inputData.map((el, id) => {
            return (
              <IonItem key={id} className="contactSelect ion-margin-horizontal">
                <IonLabel
                  position="floating"
                  color="secondary"
                  className="label"
                >
                  {el.label}
                </IonLabel>
                <IonInput type={el.type}></IonInput>
              </IonItem>
            );
          })}
        </IonRow>
        <div className="contactTxtArea ion-margin">
          <textarea placeholder="Your Message.." />
        </div>
      </IonGrid>
      <div className="contactBtn">
        <button className="bg-pri" type="submit">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;

/**
 * <IonItem>
              <IonLabel color="secondary">Gender</IonLabel>
              <IonSelect interface="popover">
                <IonSelectOption value="female">Female</IonSelectOption>
                <IonSelectOption value="male">Male</IonSelectOption>
              </IonSelect>
            </IonItem>
 */
