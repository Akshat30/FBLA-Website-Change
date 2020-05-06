import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import firebase from "firebase/firebase.js";
import Alert from "react-bootstrap/Alert";

var ReactDOM = require("react-dom");
var Barcode = require("react-barcode");
firebase.initializeApp({
  apiKey: "AIzaSyAnEdac3nzGAvOk8f02OiU0Z2ksT0EDk54",
  authDomain: "homesteadfbla-31a97.firebaseapp.com",
  projectId: "homesteadfbla-31a97"
});
class BarcodeGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.inputInfo = this.inputInfo.bind(this);
    this.eventInput = React.createRef();
    this.ptsInput = React.createRef();
    this.validate = this.validate.bind(this);
    this.state = {
      barcodeInfo: null,
      loaded: false
    };
  }

  componentDidMount() {
    var toRef = this;
    firebase.auth().onAuthStateChanged(function(user) {
      var promise = [];
      if (user) {
        console.log("someone?", user);
        var db = firebase.firestore();
        var authCheck = db.collection("users").doc(user["displayName"]);
        promise.push(
          authCheck
            .get()
            .then(
              function(doc) {
                if (doc.exists) {
                  console.log("Document data:", doc.data());
                  if (doc.data()["authLevel"] !== "admin") {
                    window.location = "cant-be-here";
                  }
                } else {
                  window.location = "cant-be-here";
                }
              }.bind(this)
            )
            .catch(
              function(error) {
                console.log("Error getting document:", error);
              }.bind(this)
            )
        );
      } else {
        window.location = "cant-be-here";
      }
      Promise.all(promise).then(
        setTimeout(() => {
          toRef.validate();
        }, 1000)
      );
    });
  }

  validate() {
    this.setState({ loaded: true });
  }

  inputInfo() {
    var uniqueID = Math.floor(Math.random() * 900000) + 100000;
    var event = this.eventInput.current.value;
    var pts = parseInt(this.ptsInput.current.value);
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var date = new Date().getDate(); //Current Date
    var db = firebase.firestore();
    if (typeof pts == "number" && event !== "" && pts !== 0 && pts && event) {
      db.collection("activity points")
        .doc(String(uniqueID))
        .set({
          event: event,
          points: pts,
          timeStamp: month + "/" + date + "/" + year + "/" + hours + ":" + min
        });
      this.setState({ barcodeInfo: uniqueID });
    } else {
      alert("Invalid Input");
    }
  }

  render() {
    if (this.state.loaded) {
      if (!this.state.barcodeInfo) {
        return (
          <Container style={{ marginTop: "50px" }}>
            <Row
              className="justify-content-md-center"
              style={{ marginBottom: "50px" }}
            >
              <h1>Barcode Generator</h1>
            </Row>
            <Row>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Event Name</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  ref={this.eventInput}
                />
              </InputGroup>
            </Row>
            <Row style={{ marginBottom: "20px" }}>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Number of Activity Points</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  ref={this.ptsInput}
                />
              </InputGroup>
            </Row>
            <Row className="justify-content-md-center">
              <Button onClick={this.inputInfo} variant="outline-primary">
                Generate Barcode
              </Button>{" "}
            </Row>
          </Container>
        );
      } else {
        return (
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "300px" }}
          >
            <Barcode
              value={this.state.barcodeInfo}
              displayValue={false}
              width={10}
            />
          </Row>
        );
      }
    } else {
      return null;
    }
  }
}

export default BarcodeGenerator;
