import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import firebase from "firebase/firebase.js";
class ManualActivityPoints extends React.Component {
  constructor(props) {
    super(props);
    this.enter = this.enter.bind(this);
    this.idInput = React.createRef();
    this.state = {
      barcodeInfo: null,
      buttonText: "Enter",
      buttonStyle: "outline-primary"
    };
  }

  enter() {
    this.setState({ buttonStyle: "outline-warning" });
    this.setState({ buttonText: "Updating database..." });
    var db = firebase.firestore();
    var id = this.idInput.current.value;
    var userName = null;
    var currentPeople = [];
    var eventName = ""
    var points = 0
    var timeStamp = ""


    Promise.all([
      db
        .collection("users")
        .where("id", "==", id)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            userName = doc.id;
          });
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        })
    ]).then(
      function() {
        if (this.props.eventID) {
          var docRef = db.collection("activity points").doc(this.props.eventID);
          Promise.all([
            docRef.get().then(function(doc) {
              if (doc.exists) {
                currentPeople = doc.data()["Attendees"];
                eventName = doc.data()["event"]
                points = doc.data()["points"]
                timeStamp = doc.data()["timeStamp"]
              }
            }.catch(function(error) {
                console.log("Error getting document:", error);
              }))
          ]).then(function(){
            currentPeople.push(userName)

            db.collection("activity points")
              .doc(this.props.eventID)
              .set({
                event: eventName,
                Attendees: currentPeople,
                points: points,
                timeStamp : timeStamp
              })
              .then(function() {
                this.setState({ buttonStyle: "outline-success" });
                this.setState({ buttonText: "Entered!" });
              })
              .catch(function(error) {
                this.setState({ buttonStyle: "outline-danger" });
                this.setState({ buttonText: "Some error occurred. I would probably contact tech team..." });
              });
  
          }.bind(this))

         
        } else {
          this.setState({ buttonStyle: "outline-danger" });
          this.setState({ buttonText: "Event Does Not Exist" });
        }
      }.bind(this)
    );
  }

  render() {
    if (!this.state.barcodeInfo) {
      return (
        <Container style={{ marginTop: "50px" }}>
          <Row
            className="justify-content-md-center"
            style={{ marginBottom: "50px" }}
          >
            <h1>Manual Activity Points</h1>
            <h8>Enter your student ID to be given points for the event</h8>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Student ID</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                ref={this.idInput}
              />
            </InputGroup>
          </Row>

          <Row className="justify-content-md-center">
            <Button onClick={this.enter} variant={this.state.buttonStyle}>
              {this.state.buttonText}
            </Button>{" "}
          </Row>
        </Container>
      );
    }
  }
}

export default ManualActivityPoints;
