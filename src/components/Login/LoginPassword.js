import React, { useState, useEffect } from "react";
import { withRouter,Link } from "react-router-dom";
import "./Step2.css";
import Keypad from "./Keypad/Keypad";
import {SigninContext} from "../../SigninContext"
import backIcon from "../../assets/arrow.png";
import {Auth} from 'aws-amplify';
const Step2 = (props) => {
    const countcontext=React.useContext(SigninContext);
    const [number, setNumber] = useState([]);
    
    const [error, setError] = useState(false);
    const [dots, setDots] = useState([
      { id: "0", status: false },
      { id: "1", status: false },
      { id: "2", status: false },
      { id: "3", status: false },
      { id: "4", status: false },
      { id: "5", status: false },
    ]);
    const [confirmNumber, setConfirmNumber] = useState([]);
    const [confirmDots, setConfirmDots] = useState([
      { id: "0", status: false },
      { id: "1", status: false },
      { id: "2", status: false },
      { id: "3", status: false },
      { id: "4", status: false },
      { id: "5", status: false },
    ]);
  

  
    const dotHandler = (dotStatus, setDotsFunc, id) => {
      setDotsFunc((currDot) => {
        const dotId = id;
        const newDotStatus = dotStatus;
        const updatedDots = [...currDot];
        updatedDots[dotId] = {
          ...currDot[dotId],
          status: newDotStatus,
        };
        return updatedDots;
      });
    };
    const addNumber = (num, stateArr, func, setCodeFunc, setDotFunc, length) => {
      const arr = [...stateArr];
      if (func === "add") {
        if (stateArr.length < 6) {
          arr.push(num);
          setCodeFunc([...arr]);
          dotHandler(true, setDotFunc, length);
        }
      } else {
        arr.pop();
        setCodeFunc([...arr]);
        dotHandler(false, setDotFunc, length - 1);
      }
    };
  
    const goBack = () => {
      setNumber([]);
      const updatedDots = [...dots];
      setDots((currDot) => {
        currDot.forEach((_, id) => {
          updatedDots[id] = {
            ...currDot[id],
            status: false,
          };
        });
        return updatedDots;
      });
    };
    const handleNext = () => {
      
       
        const f=() => countcontext.dispatch({type:'step2',payload:{password:confirmNumber.join('')}})
        f()
        Auth.signIn({
            username:countcontext.state.mobilenumber,
            password:confirmNumber.join(''),
        })
        .then(()=>{
        console.log('signed in')   
    })
        // props.handleNext();

    };
    return (
      <>
      
          <div className="Step2b">
              <Link to="/login">
                <button
                className={props.signUp ? "backBtn1" : "backBtn2"}
                onClick={goBack}
                >
                <img src={backIcon} alt="backBtn" />
              
                </button>
              </Link>

            <Keypad
              title="Enter Passcode"
              dots={confirmDots}
              number={confirmNumber}
              codeHandler={addNumber}
              handleNext={handleNext}
              setFunc={setConfirmNumber}
              setDotFunc={setConfirmDots}
              length={confirmNumber.length}
              error={error}
              errorMessage={true}
            />
          </div>
      </>
    );
  };
  
  export default withRouter(Step2);
  