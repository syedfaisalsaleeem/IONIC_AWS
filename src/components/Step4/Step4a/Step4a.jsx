import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import {
  IonLabel,
  IonInput,
  IonGrid,
  IonItem,
  IonDatetime,
  IonText,
} from "@ionic/react";
import "./Step4a.css";

const Step4a = (props) => {
  const [FormIsValid, setFormIsValid] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
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
    dateOfBirth: {
      elementType: "date",
      elementConfig: {
        type: "date",
        label: "Date Of Birth",
      },
      value: "2012-12-15T13:47:20.789",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    sex: {
      elementType: "input",
      elementConfig: {
        type: "text",
        label: "Sex",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    homeAddress: {
      elementType: "input",
      elementConfig: {
        type: "text",
        label: "Home Address",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    city: {
      elementType: "input",
      elementConfig: {
        type: "text",
        label: "City",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    state: {
      elementType: "input",
      elementConfig: {
        type: "text",
        label: "Sate",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        label: "Country",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    postalCode: {
      elementType: "input",
      elementConfig: {
        type: "number",
        label: "Postal Code",
        errMessage: "at least 5 numbers",
      },
      value: "",
      validation: {
        minLength: 5,
        maxLength: 5,
        isNumeric: true,
      },
      valid: false,
      touched: false,
    },
  });

  const formElementArray = [];
  for (let key in orderForm) {
    formElementArray.push({
      id: key,
      config: orderForm[key],
    });
  }

  const checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  const inputChangedHandler = (event, inputIdentifier) => {
    const newValue = event.target.value;
    setOrderForm((currOrderForm) => {
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
      setOrderForm({ ...updatedOrderForm });
    });
  };

  const orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] = orderForm[formElementIdentifier].value;
    }
    const order = {
      orderData: formData,
    };
    props.setValid(true);
  };
  return (
    <div className="Step4a">
      <div className="fields">
        <IonGrid>
          <form onSubmit={orderHandler}>
            {formElementArray.map((formElement) => {
              let errorMessage = null;
              if (formElement.config.touched && !formElement.config.valid) {
                errorMessage = (
                  <IonText color="danger">
                    <p className="errMessage">
                      {formElement.config.elementConfig.errMessage}
                    </p>
                  </IonText>
                );
              }
              return (
                <div>
                  <IonItem key={formElement.id}>
                    <IonLabel position="floating" color="secondary">
                      {formElement.config.elementConfig.label}
                    </IonLabel>
                    {formElement.config.elementType === "input" ? (
                      <IonInput
                        required
                        value={formElement.config.value}
                        onIonChange={(e) =>
                          inputChangedHandler(e, formElement.id)
                        }
                      />
                    ) : (
                      <IonDatetime
                        displayFormat="MMM DD YYYY"
                        value={formElement.config.value}
                        onIonChange={(e) =>
                          inputChangedHandler(e, formElement.id)
                        }
                      ></IonDatetime>
                    )}
                  </IonItem>
                  {errorMessage}
                </div>
              );
            })}
            <Button disabled={!FormIsValid}>Continue</Button>
          </form>
        </IonGrid>
      </div>
    </div>
  );
};

export default Step4a;
