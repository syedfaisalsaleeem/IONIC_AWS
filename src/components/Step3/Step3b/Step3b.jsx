import React, { useState, useEffect } from "react";
import {Auth} from 'aws-amplify';
import imgUrl from "../../../assets/OTP Unlock.png";
import { IonGrid, IonRow } from "@ionic/react";
import OtpInput from "react-otp-input";
import Backdrop from "../../UI/BackDrop/BackDrop";
import "./Step3b.css";
import { withRouter } from "react-router";
import {SignContext} from "../../../SignContext.js";
const Step3b = (props) => {
  const countcontext=React.useContext(SignContext);
  const { handleNext } = props;
  const [otp, setOtp] = useState("");
  const [showBackDrop, setShowBackDrop] = useState(false);
  const [confirmsignup,setconfirmsignup]=useState(false)
  useEffect(() => {
    let timer = null;
    if (otp.length === 6) {
      setShowBackDrop(true);
      if(!confirmsignup){
        console.log(countcontext.state.mobilenumber)
        Auth.confirmSignUp(countcontext.state.mobilenumber,otp)
        .then(()=> {console.log('confirm sign up');      
        timer = setTimeout(() => {
          setShowBackDrop(false);
  
          handleNext();
        }, 1000);})
        .catch(err=> console.log(err));
      }
      else{
}
    }
    return () => {
      clearTimeout(timer);
    };
  }, [handleNext, otp,showBackDrop,confirmsignup]);

  return (
    <div className="Step3b">
      <Backdrop open={showBackDrop} />
      <div className="imgOtp">
        <img src={imgUrl} alt="" />
      </div>
      <div className="titleOtp">
        <h3>OTP Verification</h3>
      </div>
      <div className="contentOtp">
        <h5>Enter the OTP sent to +00-0000-000</h5>
      </div>
      <div className="codeOtp">
        <IonGrid>
          <IonRow className="ion-justify-content-between">
            <div className="inputs">
              <OtpInput
                shouldAutoFocus
                value={otp}
                onChange={setOtp}
                numInputs={6}
              />
            </div>
          </IonRow>
        </IonGrid>
      </div>
      <div className="lastTxtOtp">
        <p>
          Didn't receive a code?<a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Step3b);
