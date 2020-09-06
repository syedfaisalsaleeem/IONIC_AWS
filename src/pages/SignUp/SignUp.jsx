import React from "react";
import { IonHeader, IonToolbar, IonContent, IonPage } from "@ionic/react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import "./SignUp.css";
import Step1 from "../../components/Step1/Step1";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";
import Step4 from "../../components/Step4/Step4";
import Step5 from "../../components/Step5/Step5";
import { withRouter } from "react-router";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 6px)",
    right: "calc(50% + 0px)",
  },
  active: {
    "& $line": {
      borderColor: "var(--ion-color-primary)",
    },
  },
  completed: {
    "& $line": {
      borderColor: "var(--ion-color-primary)",
    },
  },
  line: {
    borderColor: "#dfdfdf",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#dfdfdf",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#fff",
    width: 15,
    height: 15,
    borderRadius: "50%",
    border: "1px solid var(--ion-color-primary)",
    marginTop: "4px",
    zIndex: "100",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#fff",
    zIndex: 1,
    fontSize: 18,
    background: "var(--ion-color-primary)",
    borderRadius: "50%",
    height: "20px",
    width: "20px",
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "#F8F9FC",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  headControl: {
    display: "flex",
    paddingTop: "1rem",
    alignItems: "center",
    "& > *:first-child": {
      fontSize: "1.5rem",
    },
  },
}));

function getSteps() {
  return [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
    "Create an ad group",
    "Create an ad",
  ];
}

const SignUp = (props) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Step1 handleNext={handleNext} />;
      case 1:
        return <Step2 handleNext={handleNext} signUp />;
      case 2:
        return <Step3 handleNext={handleNext} />;
      case 3:
        return <Step4 handleNext={handleNext} />;
      case 4:
        return <Step5 handleNext={handleNext} />;
      default:
        return "Unknown step";
    }
  }

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <section className="signUp">
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar className="ion-no-padding">
            <div className={classes.root}>
              <div className={classes.headControl}>
                <Button
                  onClick={
                    activeStep === 0
                      ? () => props.history.push("/")
                      : handleBack
                  }
                >
                  <i className="fas fa-angle-left"></i>
                </Button>
                <div style={{ fontSize: "12px" }}>
                  Step {activeStep + 1} of 5
                </div>
              </div>
              <Stepper
                style={{ background: "#F8F9FC" }}
                alternativeLabel
                activeStep={activeStep}
                connector={<QontoConnector />}
              >
                {steps.map((label, id) => (
                  <Step key={id}>
                    <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="stepper-steps ion-padding ion-margin">
            <div>{getStepContent(activeStep)}</div>
          </div>
        </IonContent>
      </IonPage>
    </section>
  );
};

export default withRouter(SignUp);
