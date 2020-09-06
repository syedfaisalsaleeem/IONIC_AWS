import React from "react";

import imgUrl from "../../assets/Verifying.png";

import "./Step5.css";
import { IonGrid, IonCol, IonRow } from "@ionic/react";
import { withRouter } from "react-router";


const Step5 = (props) => {
  const toContact = () =>  props.history.push('/contact-us');
  return (
    <div className="Step5">
      <div className="verifyImg">
        <img src={imgUrl} alt="" />
      </div>
      <div className="verifyTitle">
        <h3>We are verifying your account</h3>
      </div>
      <div className="verifyContent">
        <h6>
          We'll notify when its completed or if <br />
          we need to some more information <br />
          from you
        </h6>
      </div>
      <div className="txt">
        <h6>Need to talk to us about something?</h6>
      </div>
      <IonGrid className="ion-margin-top ion-padding-top">
        <IonRow className="ion-justify-content-around">
          <IonCol size="5">
            <button className="btn bg-pri">Chat Now</button>
          </IonCol>
          <IonCol size="5">
            <button onClick={() =>toContact(props)} className="btn bg-sec">
              Contact Us
            </button>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default withRouter(Step5);
