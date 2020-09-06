import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import "./Step1.css";
import { IonItem, IonInput, IonLabel, IonText } from "@ionic/react";
import Button from "../UI/Button/Button";
import {SignContext} from "../../SignContext.js"
const Step1 = (props) => {
  useEffect(() => {
    
  }, []);
  const countcontext=React.useContext(SignContext);
  const [FormIsValid, setFormIsValid] = useState(false);
  const [nicknames, setNicknames] = useState(countcontext.state.nicknames);
  const [fullnames, setfullnames] = useState(countcontext.state.fullnames);
  const [step1Form, setStep1Form] = useState({
    name: {
      elementConfig: {
        title: "How should we address you?",
        type: "text",
        label: "Your Full Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    nickname: {
      elementConfig: {
        title: "Choose your community nickname",
        type: "text",
        label: "Display Name",
        errMessage: "Nickname already been claimed",
      },
      value: "",
      validation: {
        required: true,
        cmpValue: true,
      },
      valid: false,
      touched: false,
    },
  });

  const formElementArray = [];
  for (let key in step1Form) {
    formElementArray.push({
      id: key,
      config: step1Form[key],
    });
  }

  const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
      console.log("Value = ", value);
    }

    if (rules.cmpValue) {
      isValid = value !== nicknames && isValid;
      console.log("Value = ", value, "Compare Value = ", rules.cmpValue);
    }
    return isValid;
  };
  const inputChangedHandler1=(e)=>{
    console.log(e.target.value,e.target.id)
    if(e.target.id==="nicknames"){
      setNicknames(e.target.value)
    }
    else(
      setfullnames(e.target.value)
    )
  }
  const inputChangedHandler = (event, inputIdentifier) => {
    const newValue = event.target.value;
    setStep1Form((currOrderForm) => {
      const updatedOrderForm = { ...currOrderForm };
      const updatedFormElement = { ...updatedOrderForm[inputIdentifier] };
      updatedFormElement.value = newValue;
      updatedFormElement.valid = checkValidity(
        updatedFormElement.value,
        updatedFormElement.validation
      );
      updatedFormElement.touched = true;
      updatedOrderForm[inputIdentifier] = updatedFormElement;
      let formIsValid = true;
      for (let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
      }
      setFormIsValid(formIsValid);
      setStep1Form({ ...updatedOrderForm });
    });
  };

  const formHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in step1Form) {
      formData[formElementIdentifier] = step1Form[formElementIdentifier].value;
    }
    const form = {
      formData: formData,
    };
    console.log(form);
    console.log(nicknames)
    if(nicknames.length===0 || (fullnames).length===0)
    {console.log("error")}
    else{
       props.handleNext();
    }
    const f=() => countcontext.dispatchf({type:'step1',payload:{nicknames:nicknames,fullnames:fullnames}})
    f()
  };

  return (
    <div className="signUp">
      <div>{countcontext.state.nicknames}</div>
      <Typography variant="h3" style={{ fontWeight: "bold" }}>
        Hello
      </Typography>
      <div className="addBtn ion-margin-top">
        <i className="fas fa-plus"></i>
      </div>

      <form onSubmit={formHandler}>
          <div  className="form-group ion-margin-top ion-padding-top">
            {/* key={formElement.id} */}
              <Typography variant="subtitle1">
                How should we address you ?
                {/* {formElement.config.elementConfig.title} */}
              </Typography>
              <div className="ion-padding-top">
                <IonItem style={{ width: "80%" }}>
                  <IonLabel position="floating" color="secondary">
                    {/* {formElement.config.elementConfig.label} */}
                    Your Full name
                  </IonLabel>
                  <IonInput
                    type="text"
                    id="fullnames"
                    value={fullnames}
                    onIonChange={(e) => inputChangedHandler1(e)}
                    // value={formElement.config.value}
                    // onIonChange={(e) => inputChangedHandler(e, formElement.id)}
                  />
                </IonItem>
                
              </div>
            </div>
            <div  className="form-group ion-margin-top ion-padding-top">
            {/* key={formElement.id} */}
              <Typography variant="subtitle1">
                Choose your community nick name
                {/* {formElement.config.elementConfig.title} */}
              </Typography>
              <div className="ion-padding-top">
                <IonItem style={{ width: "80%" }}>
                  <IonLabel position="floating" color="secondary">
                    {/* {formElement.config.elementConfig.label} */}
                    Display name
                  </IonLabel>
                  <IonInput
                    type="text"
                    
                    id="nicknames"
                    value={nicknames}
                    onIonChange={(e) => inputChangedHandler1(e)}
                  />
                </IonItem>
                
              </div>
            </div>
        
        {/* {formElementArray.map((formElement) => {
          let errorMessage = null;
          if (
            formElement.config.touched &&
            !formElement.config.valid &&
            formElement.config.value !== ""
          ) {
            errorMessage = (
              <div className="errorBox">
                <div className="crossIcon">
                  <i className="fas fa-times"></i>
                </div>
                <IonText color="danger">
                  <p className="errMessage">
                    {formElement.config.elementConfig.errMessage}
                  </p>
                </IonText>
              </div>
            );
          }
          return (
            <div
              key={formElement.id}
              className="form-group ion-margin-top ion-padding-top"
            >
              <Typography variant="subtitle1">
                {formElement.config.elementConfig.title}
              </Typography>
              <div className="ion-padding-top">
                <IonItem style={{ width: "80%" }}>
                  <IonLabel position="floating" color="secondary">
                    {formElement.config.elementConfig.label}
                  </IonLabel>
                  <IonInput
                    type="text"
                    required
                    value={formElement.config.value}
                    onIonChange={(e) => inputChangedHandler(e, formElement.id)}
                  />
                </IonItem>
                {errorMessage}
              </div>
            </div>
          );
        })} */}
        <Button onClick={() => SignContext.dispatchf('step1')} >Continue</Button>
      </form>
    </div>
  );
};

export default Step1;
