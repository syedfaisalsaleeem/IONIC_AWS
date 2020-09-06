import React, { useState } from "react";
import {Auth} from 'aws-amplify';
import CallIcon from "@material-ui/icons/Call";
import imgUrl from "../../../assets/Sent.png";
import { IonItem, IonInput } from "@ionic/react";

import Button from "../../UI/Button/Button";

import "./Step3a.css";
import {SignContext} from "../../../SignContext.js";

const Step3a = (props) => {
  const countcontext=React.useContext(SignContext);
  const [mobileNumber, setMobileNumber] = useState();
  const [signedup,setsignedup]=useState(false);
  
  const onChangeHandler = (e) => {
    setMobileNumber(e.target.value);

  };
  const handleSubmit=(event)=>{
    event.preventDefault()
    const f=() => countcontext.dispatchf({type:'step3',payload:{mobilenumber:mobileNumber}})
    f();
    if(!signedup){
          Auth.signUp({
              username:mobileNumber,
              password:countcontext.state.password,
              attributes:{
                  phone_number:mobileNumber,
                  name:countcontext.state.fullnames,
                  nickname:countcontext.state.nicknames,
                  email:"syedfaisalsaleem.100@gmail.com"
              }
          })
          .then(()=>{console.log('signed up');props.onRedirect()})
          .catch(err=> console.log(err));
        }
        //     this.setState({
        //         signedUp:true
        //     })
        // }
        else{
          

        }
    console.log(countcontext.state.fullnames,"faisal")
    // props.onRedirect()
  }
  return (
    <div className="Step3">
      <div className="imgSent">
        <img src={imgUrl} alt="sent" />
      </div>
      <div className="titleSent">
        <h3>Launch Your Journey</h3>
      </div>
      <div className="contentSent">
        <h6>Give us the contact method you want to</h6>
        <h6>be identified with</h6>
      </div>
    <form onSubmit={handleSubmit}>
      <IonItem className="sentField">
        <CallIcon />
        <IonInput
          type="text"
          placeholder="Enter Your Mobile Number"
          value={mobileNumber}
          name="mobile number"
          onIonChange={(e) => onChangeHandler(e)}
        />
      </IonItem>
      <Button
        // disabled={mobileNumber ? false : true}
        // handleNext={props.onRedirect}
      >
        Continue
      </Button>
      </form>
    </div>
  );
};

export default Step3a;
