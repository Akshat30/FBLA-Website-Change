import React, { useState } from "react";
import { Container, Row, Tab, Nav, Col, Form } from "react-bootstrap";
import Alerts from "components/Alerts/Alerts";
import EventsComponent from "components/EventsComponent/EventsComponent.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AdminEventsComponent(props) {
  return (
    <Container
      style={{ marginTop: "50px" }}
      className="justify-content-md-center"
    >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Add Event To Calendar</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  Edit/Delete Event from Calendar
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row className="justify-content-md-center">
                  <h3>Enter A New Event</h3>
                </Row>
                <Row className="justify-content-md-center">
                  <Form>
                    <Row className="justify-content-md-center">
                      <Form.Label>Event Date</Form.Label>
                    </Row>
                    <Row
                      className="justify-content-md-center"
                      style={{ marginBottom: "20px" }}
                    >
                      <PickDate setDate={props.setDate} />
                    </Row>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Event Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter event name"
                        onChange={props.setEventName}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Event Description</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Describe your event"
                        onChange={props.setEventDescription}
                      />
                    </Form.Group>

                    <Row
                      style={{ marginTop: "20px" }}
                      className="justify-content-md-center"
                    >
                      <Alerts
                        style={{ marginTop: "10px" }}
                        buttonName="Add to Calendar"
                        modalTitle="Event added to everyone's calendar :)"
                        optionalOnClickFunction={props.addEvent}
                      />
                    </Row>
                  </Form>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row className="justify-content-md-center">
                  <h3>Edit An Event</h3>
                  <h8 style={{ marginBottom: "10px" }}>
                    <i>
                      If you want to delete the event, indicate the date of the
                      event in "previous event date" and check "Delete Event".
                      To edit the event, fill in all the fields and do not check
                      "Delete Event"
                    </i>
                  </h8>
                </Row>
                <Row className="justify-content-md-center">
                  <Form>
                    <Row className="justify-content-md-center">
                      <Form.Label>Previous Event Date</Form.Label>
                    </Row>
                    <Row
                      className="justify-content-md-center"
                      style={{ marginBottom: "20px" }}
                    >
                      <PickDate setDate={props.setDate} />
                    </Row>
                    <Row className="justify-content-md-center">
                      <Form.Label>New Event Date</Form.Label>
                    </Row>
                    <Row
                      className="justify-content-md-center"
                      style={{ marginBottom: "20px" }}
                    >
                      <PickDate setDate={props.setNewDate} />
                    </Row>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Event Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter event name"
                        onChange={props.setEventName}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Event Description</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Describe your event"
                        onChange={props.setEventDescription}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Delete Event"
                        onChange={props.eventDeletion}
                      />
                    </Form.Group>
                    <Row
                      style={{ marginTop: "20px" }}
                      className="justify-content-md-center"
                    >
                      <Alerts
                        style={{ marginTop: "10px" }}
                        buttonName="Edit Event"
                        modalTitle="Event modified :)"
                        optionalOnClickFunction={props.editEvent}
                      />
                    </Row>
                  </Form>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <Row className="justify-content-md-center"></Row>
      <Row>
        <EventsComponent />
      </Row>
    </Container>
  );
}
function PickDate(props) {
  const [startDate, setStartDate] = useState(new Date());
  const manageDate = date => {
    setStartDate(date);
    props.setDate(date);
  };
  return (
    <DatePicker
      showPopperArrow={false}
      selected={startDate}
      onChange={date => manageDate(date)}
      popoverAttachment="bottom right"
    />
  );
}
