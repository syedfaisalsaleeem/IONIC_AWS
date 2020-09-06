import React from "react";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import { IonApp } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import Starter from "./pages/Starter/Starter";
import SignUp from "./pages/SignUp/SignUp";
import Contact from "./pages/Contact/Contact";
import Loginpassword from "./pages/Login/Loginpassword"
import "./App.css";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  StylesProvider,
} from "@material-ui/core";
import Login from "./pages/Login/Login";
import Step3b from "./components/Step3/Step3b/Step3b";
import Step2 from "./components/Step2/Step2";
import { SignContext } from "./SignContext";
import { SigninContext } from "./SigninContext";
import Amplify from "aws-amplify"
import awsmobile from "./aws-exports.js";

import {withAuthenticator} from "aws-amplify-react"
Amplify.configure(awsmobile)
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000084",
    },
    secondary: {
      main: "#aaa",
    },
    light: "#EEF2F8",
  },
});

theme = responsiveFontSizes(theme);
const signupform={
        fullnames:"",
        nicknames:"asd",
        password:"",
        mobilenumber:"",
        email:""
}
function reducer(state,action){
  switch(action.type){
    
    case 'step1':
      console.log(action,"weq")
      
      return{
        ...state,fullnames:action.payload.fullnames,nicknames:action.payload.nicknames
        }
    case 'step2':
      console.log(action,"weq")
      
      return{
        ...state,password:action.payload.password
        }
    case 'step3':
      console.log(action,"weq")
      return{
        ...state,mobilenumber:action.payload.mobilenumber
      }
      default:
        console.log("working")
}
}
const signinform={
  mobilenumber:"",
  password:""
}
function reducer1(state,action){
switch(action.type){

case 'step1':
console.log(action,"weq")

return{
  ...state,fullnames:action.payload.fullnames,nicknames:action.payload.nicknames
  }
case 'step2':
console.log(action,"weq")

return{
  ...state,password:action.payload.password
  }
case 'step3':
console.log(action,"weq")
return{
  ...state,mobilenumber:action.payload.mobilenumber
}
default:
  console.log("working")
}
}
const App = () => {
  const [state,dispatch]=React.useReducer(reducer,signupform)
  const [state1,dispatch1]=React.useReducer(reducer1,signinform)
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <IonApp style={{ background: "#fff" }}>
          {console.log(signupform)}
        
          
          <BrowserRouter>
            <Route exact path="/" component={Starter} />
            <Route path="/passcode" component={Step2} />
            <Route path="/otp" component={Step3b} />
            <SigninContext.Provider value={{state:state1,dispatch:dispatch1}}>
            <Route path="/login" component={Login} />
            <Route path="/loginpassword" component={Loginpassword} />
            </SigninContext.Provider>
            <Route path="/contact-us" component={Contact} />
            <SignContext.Provider value={{state:state,dispatchf:dispatch}}>
            <Route path="/signUp" component={SignUp} />
            </SignContext.Provider>
            
          </BrowserRouter>
          
        </IonApp>
      </StylesProvider>
    </MuiThemeProvider>
  );
};

export default (App);
