import React, { useEffect } from "react";
import Step3b from "../../components/Step3/Step3b/Step3b";
import { TextField, MenuItem } from "@material-ui/core";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { withRouter,Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import "./Login.css";
import {SigninContext} from "../../SigninContext"
import backIcon from "../../assets/arrow.png";

const countryData = [
  { code: "93", apiCode: "af" },
  { code: "355", apiCode: "al" },
  { code: "213", apiCode: "dz" },
  { code: "1-684", apiCode: "as" },
  { code: "376", apiCode: "ad" },
  { code: "244", apiCode: "ao" },
  { code: "1-264", apiCode: "ai" },
  { code: "672", apiCode: "aq" },
  { code: "1-268", apiCode: "ag" },
  { code: "54", apiCode: "ar" },
  { code: "374", apiCode: "am" },
  { code: "297", apiCode: "aw" },
  { code: "61", apiCode: "au" },
  { code: "43", apiCode: "at" },
  { code: "994", apiCode: "az" },
  { code: "1-242", apiCode: "bs" },
  { code: "973", apiCode: "bh" },
  { code: "880", apiCode: "bd" },
  { code: "1-246", apiCode: "bb" },
  { code: "375", apiCode: "by" },
  { code: "32", apiCode: "be" },
  { code: "501", apiCode: "bz" },
  { code: "229", apiCode: "bj" },
  { code: "1-441", apiCode: "bm" },
  { code: "975", apiCode: "bt" },
  { code: "591", apiCode: "bo" },
  { code: "387", apiCode: "ba" },
  { code: "267", apiCode: "bw" },
  { code: "55", apiCode: "br" },
  { code: "246", apiCode: "io" },
  { code: "1-284", apiCode: "vg" },
  { code: "673", apiCode: "bn" },
  { code: "359", apiCode: "bg" },
  { code: "226", apiCode: "bf" },
  { code: "257", apiCode: "bi" },
  { code: "855", apiCode: "kh" },
  { code: "237", apiCode: "cm" },
  { code: "1", apiCode: "ca" },
  { code: "238", apiCode: "cv" },
  { code: "1-345", apiCode: "ky" },
  { code: "236", apiCode: "cf" },
  { code: "235", apiCode: "td" },
  { code: "56", apiCode: "cl" },
  { code: "89", apiCode: "cn" },
  { code: "61", apiCode: "cx" },
  { code: "57", apiCode: "cc" },
  { code: "269", apiCode: "co" },
  { code: "682", apiCode: "km" },
  { code: "506", apiCode: "ck" },
  { code: "385", apiCode: "cr" },
  { code: "53", apiCode: "hr" },
  { code: "53", apiCode: "cu" },
  { code: "599", apiCode: "cw" },
  { code: "357", apiCode: "cy" },
  { code: "420", apiCode: "cz" },
  { code: "243", apiCode: "cd" },
  { code: "45", apiCode: "dk" },
  { code: "253", apiCode: "dj" },
  { code: "1-767", apiCode: "dm" },
  { code: "1-809", apiCode: "do" },
  { code: "1-829", apiCode: "do" },
  { code: "1-849", apiCode: "do" },
  { code: "670", apiCode: "tl" },
  { code: "593", apiCode: "ec" },
  { code: "20", apiCode: "eg" },
  { code: "503", apiCode: "sv" },
  { code: "240", apiCode: "gq" },
  { code: "291", apiCode: "er" },
  { code: "372", apiCode: "ee" },
  { code: "251", apiCode: "et" },
  { code: "500", apiCode: "fk" },
  { code: "298", apiCode: "fo" },
  { code: "679", apiCode: "fj" },
  { code: "358", apiCode: "fi" },
  { code: "33", apiCode: "fr" },
  { code: "689", apiCode: "pf" },
  { code: "241", apiCode: "ga" },
  { code: "220", apiCode: "gm" },
  { code: "995", apiCode: "ge" },
  { code: "49", apiCode: "de" },
  { code: "233", apiCode: "gh" },
  { code: "350", apiCode: "gi" },
  { code: "30", apiCode: "gr" },
  { code: "299", apiCode: "gl" },
  { code: "1-473", apiCode: "gd" },
  { code: "1-671", apiCode: "gu" },
  { code: "502", apiCode: "gt" },
  { code: "44-1481", apiCode: "gg" },
  { code: "224", apiCode: "gn" },
  { code: "245", apiCode: "gw" },
  { code: "592", apiCode: "gy" },
  { code: "509", apiCode: "ht" },
  { code: "504", apiCode: "hn" },
  { code: "852", apiCode: "hk" },
  { code: "36", apiCode: "hu" },
  { code: "354", apiCode: "is" },
  { code: "91", apiCode: "in" },
  { code: "62", apiCode: "id" },
  { code: "98", apiCode: "ir" },
  { code: "964", apiCode: "iq" },
  { code: "353", apiCode: "ie" },
  { code: "44-1624", apiCode: "im" },
  { code: "972", apiCode: "il" },
  { code: "39", apiCode: "it" },
  { code: "225", apiCode: "ci" },
  { code: "1-876", apiCode: "jm" },
  { code: "81", apiCode: "jp" },
  { code: "44-1534", apiCode: "je" },
  { code: "962", apiCode: "jo" },
  { code: "7", apiCode: "kz" },
  { code: "254", apiCode: "ke" },
  { code: "686", apiCode: "ki" },
  { code: "383", apiCode: "xk" },
  { code: "965", apiCode: "kw" },
  { code: "996", apiCode: "kg" },
  { code: "856", apiCode: "la" },
  { code: "371", apiCode: "lv" },
  { code: "961", apiCode: "lb" },
  { code: "266", apiCode: "ls" },
  { code: "231", apiCode: "lr" },
  { code: "218", apiCode: "ly" },
  { code: "423", apiCode: "li" },
  { code: "370", apiCode: "lt" },
  { code: "352", apiCode: "lu" },
  { code: "853", apiCode: "mo" },
  { code: "389", apiCode: "mk" },
  { code: "261", apiCode: "mg" },
  { code: "265", apiCode: "mw" },
  { code: "60", apiCode: "my" },
  { code: "960", apiCode: "mv" },
  { code: "223", apiCode: "ml" },
  { code: "356", apiCode: "mt" },
  { code: "692", apiCode: "mh" },
  { code: "222", apiCode: "mr" },
  { code: "230", apiCode: "mu" },
  { code: "262", apiCode: "yt" },
  { code: "52", apiCode: "mx" },
  { code: "691", apiCode: "fm" },
  { code: "373", apiCode: "md" },
  { code: "377", apiCode: "mc" },
  { code: "976", apiCode: "mn" },
  { code: "382", apiCode: "me" },
  { code: "1-664", apiCode: "ms" },
  { code: "212", apiCode: "ma" },
  { code: "258", apiCode: "mz" },
  { code: "95", apiCode: "mm" },
  { code: "264", apiCode: "na" },
  { code: "674", apiCode: "nr" },
  { code: "977", apiCode: "np" },
  { code: "31", apiCode: "nl" },
  { code: "599", apiCode: "an" },
  { code: "687", apiCode: "nc" },
  { code: "64", apiCode: "nz" },
  { code: "505", apiCode: "ni" },
  { code: "227", apiCode: "ne" },
  { code: "234", apiCode: "ng" },
  { code: "683", apiCode: "nu" },
  { code: "850", apiCode: "kp" },
  { code: "1-670", apiCode: "mp" },
  { code: "47", apiCode: "mo" },
  { code: "968", apiCode: "om" },
  { code: "92", apiCode: "pk" },
  { code: "680", apiCode: "pw" },
  { code: "970", apiCode: "ps" },
  { code: "507", apiCode: "pa" },
  { code: "675", apiCode: "pg" },
  { code: "595", apiCode: "py" },
  { code: "51", apiCode: "pe" },
  { code: "63", apiCode: "ph" },
  { code: "64", apiCode: "pn" },
  { code: "48", apiCode: "pl" },
  { code: "351", apiCode: "pt" },
  { code: "1-787", apiCode: "pr" },
  { code: "1-939", apiCode: "pr" },
  { code: "974", apiCode: "qa" },
  { code: "242", apiCode: "cg" },
  { code: "262", apiCode: "re" },
  { code: "40", apiCode: "ro" },
  { code: "7", apiCode: "ru" },
  { code: "250", apiCode: "rw" },
  { code: "590", apiCode: "bl" },
  { code: "290", apiCode: "sh" },
  { code: "1-869", apiCode: "kn" },
  { code: "1-758", apiCode: "lc" },
  { code: "590", apiCode: "mf" },
  { code: "508", apiCode: "pm" },
  { code: "1-784", apiCode: "vc" },
  { code: "685", apiCode: "ws" },
  { code: "378", apiCode: "sm" },
  { code: "239", apiCode: "st" },
  { code: "966", apiCode: "sa" },
  { code: "221", apiCode: "sn" },
  { code: "381", apiCode: "rs" },
  { code: "248", apiCode: "sc" },
  { code: "232", apiCode: "sl" },
  { code: "65", apiCode: "sg" },
  { code: "1-721", apiCode: "sx" },
  { code: "421", apiCode: "sk" },
  { code: "386", apiCode: "si" },
  { code: "677", apiCode: "sb" },
  { code: "252", apiCode: "so" },
  { code: "27", apiCode: "za" },
  { code: "82", apiCode: "kr" },
  { code: "211", apiCode: "ss" },
  { code: "34", apiCode: "es" },
  { code: "94", apiCode: "lk" },
  { code: "249", apiCode: "sd" },
  { code: "597", apiCode: "sr" },
  { code: "47", apiCode: "sj" },
  { code: "268", apiCode: "sz" },
  { code: "46", apiCode: "se" },
  { code: "41", apiCode: "ch" },
  { code: "963", apiCode: "sy" },
  { code: "886", apiCode: "tw" },
  { code: "992", apiCode: "tj" },
  { code: "255", apiCode: "tz" },
  { code: "66", apiCode: "th" },
  { code: "228", apiCode: "tg" },
  { code: "690", apiCode: "tk" },
  { code: "676", apiCode: "to" },
  { code: "1-868", apiCode: "it" },
  { code: "216", apiCode: "tn" },
  { code: "90", apiCode: "tr" },
  { code: "993", apiCode: "tm" },
  { code: "1-649", apiCode: "tc" },
  { code: "688", apiCode: "tv" },
  { code: "1-340", apiCode: "vi" },
  { code: "256", apiCode: "ug" },
  { code: "380", apiCode: "ua" },
  { code: "971", apiCode: "ae" },
  { code: "44", apiCode: "gb" },
  { code: "1", apiCode: "us" },
  { code: "598", apiCode: "uy" },
  { code: "998", apiCode: "uz" },
  { code: "678", apiCode: "vu" },
  { code: "379", apiCode: "va" },
  { code: "58", apiCode: "ve" },
  { code: "84", apiCode: "vn" },
  { code: "681", apiCode: "wf" },
  { code: "212", apiCode: "eh" },
  { code: "967", apiCode: "ye" },
  { code: "260", apiCode: "zm" },
  { code: "263", apiCode: "zw" },
];


const Login = (props) => {
  const countcontext=React.useContext(SigninContext);
  
  const [txt, setTxt] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [toOtp, toSetOtp] = React.useState(false);

  // useEffect(() => {
  //   if (txt && number) {
  //     setValid(true);
  //   } else {
  //     setValid(false);
  //   }
  //   const newNumber = `+${txt + number}`;
  //   if (newNumber === "+93") {
  //     setError(false);
  //   }
  // }, [txt, number]);

  const onHandleNext = () => {
    setError(false);
    const newNumber = `+${txt + number}`;
    if (newNumber.length === 1) {
      console.log(newNumber)
      setError(true);
      setValid(false);
    } else {
      setError(true);
      toSetOtp(true);
      const f=() => countcontext.dispatch({type:'step3',payload:{mobilenumber:newNumber}})
      f()
    }
  };

  return (
  
    
    <React.Fragment>
      {toOtp ? (
        props.history.push("/Loginpassword")
      ) : (
        <div className="Login ion-margin-horizontal">
            <Link to="/">
                <div className="loginTitle ion-margin-top ion-padding-top">
                  <img src={backIcon} alt="backBtn" />
                </div>
                

                
            </Link>
          <div className="loginTitle ">
            <h1>Welcome back,</h1>
          </div>
          <IonGrid className="loginFields">
            <IonRow className="ion-justify-content-around ion-align-items-center">
              <IonCol size="4" >
                <TextField
                  className="field1"
                  fullWidth
                  id="outlined-select-gender"
                  select
                  label={
                    txt === "" ? (
                      <div className="labelFlag">
                        <img
                          src="https://www.countryflags.io/be/flat/32.png"
                          alt=""
                        />
                        <p>+93</p>
                      </div>
                    ) : (
                      ""
                    )
                  }
                  InputLabelProps={{ shrink: false }}
                  margin="normal"
                  variant="outlined"
                  value={txt}
                  onChange={(e) => setTxt(e.target.value)}
                >
                  {countryData.map((el, id) => {
                    return (
                      <MenuItem value={el.code} key={id}>
                        <div
                          className="labelFlag"
                          style={{
                            padding: "0",
                            margin: "0",
                            height: "1rem",
                            marginTop: "1px",
                          }}
                        >
                          <img
                            src={`https://www.countryflags.io/${el.apiCode}/flat/32.png`}
                            alt="hello"
                          />
                          <p>{`+${el.code}`}</p>
                        </div>
                      </MenuItem>
                    );
                  })}
                </TextField>
              </IonCol>
              <IonCol size="7">
                <TextField
                  type="number"
                  className="field2"
                  style={{ marginTop: "8px" }}
                  fullWidth
                  label="Your Mobile Number"
                  variant="outlined"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
          {error && (
            <div className="errMessage">
              <p>Phone Number is not associated with any account</p>
            </div>
          )}
          <Button  handleNext={onHandleNext}>
            Continue
          </Button>
          <div className="lastTxt">
            <a href="/">Lost access to your number?</a>
          </div>
        </div>
      )}
    </React.Fragment>
   
  );
};

export default withRouter(Login);
