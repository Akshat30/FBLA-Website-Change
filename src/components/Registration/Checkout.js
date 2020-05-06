import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import firebase from "firebase/firebase.js";

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: "none",
      userEmail: "",
      userName: "",
      userGrade: "",
      userID: 0
    };
    this.setUserType = this.setUserType.bind(this);
    this.setUserEmail = this.setUserEmail.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.setUserGrade = this.setUserGrade.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.setUserID = this.setUserID.bind(this);
    this.reset = this.reset.bind(this);
  }

  setUserType(type) {
    this.setState({ userType: type });
  }

  registerUser() {
    var db = firebase.firestore();
    var authLevel = this.state.userType == "member" ? "member" : "admin";
    db.collection("users")
      .doc(this.state.userName)
      .set({
        authLevel: authLevel,
        authType: this.state.userType,
        email: this.state.userEmail,
        grade: this.state.userGrade,
        id: this.state.userID
      })
      .then(function() {})
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  setUserEmail(email) {
    this.setState({ userEmail: email });
  }

  setUserName(name) {
    this.setState({ userName: name });
  }

  setUserGrade(grade) {
    this.setState({ userGrade: grade });
  }

  setUserID(id) {
    this.setState({ userID: id });
  }

  reset() {
    this.setState({
      userType: "none",
      userEmail: "",
      userName: "",
      userGrade: "",
      userID: ""
    });
  }

  render() {
    console.log("THE USER TYPE", this.state.userType);
    return (
      <CheckoutComponent
        userType={this.state.userType}
        setUserType={this.setUserType}
        setUserName={this.setUserName}
        setUserEmail={this.setUserEmail}
        setUserGrade={this.setUserGrade}
        userName={this.state.userName}
        userEmail={this.state.userEmail}
        userGrade={this.state.userGrade}
        registerUser={this.registerUser}
        reset={this.reset}
        setUserID={this.setUserID}
        userID={this.state.userID}
      />
    );
  }
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const steps = ["User Type", "User Information", "Review"];

function CheckoutComponent(props) {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep == steps.length - 1) {
      props.registerUser();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const reset = () => {
    setActiveStep(0);
    props.reset();
  };

  let disabled = false;

  if (activeStep == 0) {
    if (props.userType == "none") {
      disabled = true;
    }
  } else if (activeStep == 1) {
    if (
      props.userName == "" ||
      props.userGrade == "" ||
      props.userEmail == ""
    ) {
      disabled = true;
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout} style={{ marginTop: "50px" }}>
        <Typography component="h1" variant="h4" align="center">
          Website User Registration
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Member Registered
              </Typography>
              <Typography variant="subtitle1">
                Contact tech team if you think you made a mistake or need
                support
              </Typography>
              <Button variant="contained" color="primary" onClick={reset}>
                Create another user
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep == 0 ? (
                <AddressForm
                  userType={props.userType}
                  setUserType={props.setUserType}
                />
              ) : null}
              {activeStep == 1 ? (
                <PaymentForm
                  setUserName={props.setUserName}
                  setUserGrade={props.setUserGrade}
                  setUserEmail={props.setUserEmail}
                  userName={props.userName}
                  userEmail={props.userEmail}
                  userGrade={props.userGrade}
                  userID = {props.userID}
                  setUserID = {props.setUserID}
                />
              ) : null}
              {activeStep == 2 ? (
                <Review
                  userType={props.userType}
                  userName={props.userName}
                  userEmail={props.userEmail}
                  userGrade={props.userGrade}
                />
              ) : null}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                  disabled={disabled}
                >
                  {activeStep === steps.length - 1 ? "Create User" : "Next"}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      </main>
    </React.Fragment>
  );
}
