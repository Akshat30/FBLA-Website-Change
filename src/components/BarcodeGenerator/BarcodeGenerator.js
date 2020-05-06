import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import firebase from "firebase/firebase.js";

var Barcode = require("react-barcode");
class BarcodeGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.inputInfo = this.inputInfo.bind(this);
    this.eventInput = React.createRef();
    this.ptsInput = React.createRef();
    this.state = {
      barcodeInfo: null
    };
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
    if (!this.state.barcodeInfo) {
      return (
        <Container style={{ marginTop: "50px" }}>
          <Row
            className="justify-content-md-center"
            style={{ marginBottom: "50px" }}
          >
            <h1>Barcode Generator</h1>
            <h8>Fill in the details to generate a barcode. Have memebers scan the barcode for activity points</h8>
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
  }
}

export default BarcodeGenerator;
