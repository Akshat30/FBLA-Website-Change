import React from "react";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "components/EventsComponent/EventsComponent.css";
import firebase from "firebase/firebase.js";

export default class EventsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      eventName: "None",
      eventDescription: "None",
      today: new Date(),
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  onSelect(event) {
    this.setState({ eventName: "Loading..." });
    this.setState({ eventDescription: "Loading..." });
    var db = firebase.firestore();
    var dateSelected = String(event).substring(4, 15);
    var ref = this;
    var executed = false;
    var promises = [];
    promises.push(
      db
        .collection("events calendar")
        .where("date", "==", dateSelected)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            executed = true;
            var document = doc.data();
            ref.setState({ eventName: document["eventName"] });
            ref.setState({ eventDescription: document["description"] });
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        })
    );
    Promise.all(promises).then(
      function () {
        if (!executed) {
          this.setState({ eventName: "None" });
          this.setState({ eventDescription: "None" });
        }
      }.bind(this)
    );
  }

  render() {
    return (
      <>
        <Container className="calendarHeader">
          <Row>
            <Col style={{ marginLeft: "50px" }}>
              <Row>
                <span class="calendarFontTitle">
                  <b>Event : </b>
                </span>
              </Row>
              <Row>
                <span class="calendarFontDescription">
                  {this.state.eventName}
                </span>
              </Row>
            </Col>
            <Col style={{ marginLeft: "-250px" }}>
              <Row>
                <span class="calendarFontTitle">
                  <b>Description : </b>
                </span>
              </Row>
              <Row>
                <span class="calendarFontDescription">
                  {this.state.eventDescription}
                </span>
              </Row>
            </Col>
          </Row>
        </Container>
        <InfiniteCalendar
          width={1500}
          height={400}
          selected={this.state.today}
          onSelect={this.onSelect}
        />
      </>
    );
  }
}
