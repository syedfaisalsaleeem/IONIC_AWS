import React from "react";

import { IonGrid, IonRow, IonCol } from "@ionic/react";
import './Button.css';

const Button = (props) => {
  return (
    <IonGrid className="ion-margin-vertical ion-padding-vertical">
      <IonRow>
        <IonCol>
          <button
            className="contBtn"
            color="primary"
            disabled={props.disabled}
            onClick={props.handleNext}
          >
            {props.children}
          </button>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Button;
