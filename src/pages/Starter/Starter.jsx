import React from "react";

import { IonGrid, IonRow, IonButton, IonCol } from "@ionic/react";

import { withRouter } from 'react-router-dom';
import starterImg from "../../assets/Businessman-watering-a-money-tree.png";
import "./Starter.css";

const toPage = (props, link) => props.history.push(link);
const Starter = (props) => {
  return (
    <section className="starter">
      <div className="container">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="10">
              <img src={starterImg} alt="" />
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="title">
          <h3>Maximize your impact</h3>
        </div>

        <div className="content">
          <p>Create an amazing future that you love in</p>
          <p>any field from transportation to</p>
          <p>commerce.</p>
        </div>
        <div className="sub-content">
          <p>View disclosures</p>
          <i className="fas fa-angle-right"></i>
        </div>
        <IonGrid>
          <IonRow className="ion-justify-content-evenly ion-margin-vertical">
            <IonCol size="5">
              <IonButton
                className="btn"
                color="primary"
                onClick={() => toPage(props, "/login")}
                expand="block"
              >
                Login
              </IonButton>
            </IonCol>
            <IonCol size="5">
              <IonButton
                className="btn"
                color="light"
                onClick={() => toPage(props, "/signUp")}
                expand="block"
              >
                SignUp
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="last-content">
          <p>
            Want to see how it works?<a href="/">Try Demo</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Starter);
