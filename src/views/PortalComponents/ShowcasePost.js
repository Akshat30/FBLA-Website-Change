import React from "react";
import {
  Container,
  Row,
  InputGroup,
  FormControl,
  Button,
  Form,
  Col,
} from "react-bootstrap";
import firebase from "firebase/firebase.js";
import { Redirect } from "react-router-dom";

class ShowcasePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      cType: null,
      links: [],
      competitors: "",
      whatWeDid: "",
      challenges: "",
      whatWeLearned: "",
      competition: "",
      disabled: true,
      linksToWork: [],
      buttonText: "Post",
      buttonStyle: "primary",
    };
    this.goTo = this.goTo.bind(this);
    this.setCType = this.setCType.bind(this);
    this.addLink = this.addLink.bind(this);
    this.deleteLink = this.deleteLink.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.post = this.post.bind(this);
  }

  componentDidMount() {
    var db = firebase.firestore();
    let toRenderEvents = [];
    Promise.all([
      db
        .collection("events")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let data = Object.values(doc.data())[0];
            for (let i = 0; i < data.length; i++) {
              toRenderEvents.push(<option>{data[i]}</option>);
            }
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        }),
    ]).then(() => {
      this.setState({ events: toRenderEvents });
      this.setState({
        links: [
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Link to relevant work</Form.Label>
            <Form.Control
              placeholder="We've spent a lot of time describing your team's journey as competitors. Here you all can take the opportunity to show the Homestead FBLA community what your team made. Paste links here to any relevant work."
              as="textarea"
              name={0}
              onChange={this.handleInputChange}
            />
          </Form.Group>,
        ],
      });
    });
  }

  setCType(event) {
    if (event.target.value == this.state.cType) {
      this.setState({ cType: null });
    } else {
      this.setState({ cType: event.target.value });
    }
  }

  addLink() {
    let links = this.state.links;
    let size = links.length;
    links.push(
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Additional Link</Form.Label>
        <Form.Control
          placeholder="Paste a link to any relevant work here"
          name={size}
          onChange={this.handleInputChange}
        />
      </Form.Group>
    );
    this.setState({ links: links });
  }

  deleteLink() {
    let links = this.state.links;
    let linksToWork = this.state.linksToWork;
    links.splice(links.length - 1);
    linksToWork.splice(links.length - 1);
    this.setState({ links: links });
    this.setState({ linksToWork: linksToWork });
  }

  goTo(location) {
    this.setState({ redirect: location });
  }

  post() {
    this.setState({ buttonText: "Posting..." });
    this.setState({ buttonStyle: "warning" });
    var db = firebase.firestore();
    db.collection("showcase")
      .add({
        competitors: this.state.competitors,
        competition: this.state.competition,
        whatWeDid: this.state.whatWeDid,
        challenges: this.state.challenges,
        whatWeLearned: this.state.whatWeLearned,
        linksToWork: this.state.linksToWork,
      })
      .then(
        function () {
          this.setState({ buttonText: "Posted!" });
          this.setState({ buttonStyle: "success" });
        }.bind(this)
      )
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  handleInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    if (!isNaN(name)) {
      let index = parseInt(event.target.name);
      let tLinks = this.state.linksToWork;
      if (index <= tLinks.length - 1) {
        tLinks[index] = value;
      } else {
        tLinks.push(value);
      }
      console.log("tLinks", tLinks);
      console.log("index", index);
      this.setState(
        { linksToWork: tLinks },
        function () {
          if (
            this.state.competitors.length > 0 &&
            this.state.whatWeDid.length > 0 &&
            this.state.challenges.length > 0 &&
            this.state.whatWeLearned.length > 0
          ) {
            this.setState({ disabled: false });
          } else {
            this.setState({ disabled: true });
          }
        }.bind(this)
      );
    } else {
      this.setState(
        { [name]: value },
        function () {
          if (
            this.state.competitors.length > 0 &&
            this.state.whatWeDid.length > 0 &&
            this.state.challenges.length > 0 &&
            this.state.whatWeLearned.length > 0
          ) {
            this.setState({ disabled: false });
          } else {
            this.setState({ disabled: true });
          }
        }.bind(this)
      );
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    let typeCheck = null;
    let form = null;

    let addLink = (
      <Button variant="outline-success" onClick={this.addLink}>
        Add new link
      </Button>
    );
    let deleteLink = null;
    if (this.state.links.length > 1) {
      deleteLink = (
        <Button variant="outline-danger" onClick={this.deleteLink}>
          Delete Link
        </Button>
      );
    }

    let linksWrapper = <></>;

    if (!deleteLink) {
      linksWrapper = <Row className="justify-content-md-center">{addLink}</Row>;
    } else {
      linksWrapper = (
        <Row className="justify-content-md-center">
          <Col>{addLink}</Col>
          <Col>{deleteLink}</Col>
        </Row>
      );
    }

    if (this.state.cType) {
      if (this.state.cType == "Individual") {
        typeCheck = (
          <>
            <Form.Label>Competition Type</Form.Label>
            <Row>
              <Col>
                <Form.Group
                  style={{ marginBottom: "30px" }}
                  onChange={this.setCType}
                >
                  <Form.Check
                    type="checkbox"
                    value="Individual"
                    label="Individual"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  style={{ marginBottom: "30px" }}
                  onChange={this.setCType}
                >
                  <Form.Check
                    type="checkbox"
                    value="Team"
                    label="Team"
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      } else {
        typeCheck = (
          <>
            <Form.Label>Competition Type</Form.Label>
            <Row>
              <Col>
                <Form.Group
                  style={{ marginBottom: "30px" }}
                  onChange={this.setCType}
                >
                  <Form.Check
                    type="checkbox"
                    value="Individual"
                    label="Individual"
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  style={{ marginBottom: "30px" }}
                  onChange={this.setCType}
                >
                  <Form.Check type="checkbox" value="Team" label="Team" />
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      }
    } else {
      typeCheck = (
        <>
          <Form.Label>Competition Type</Form.Label>
          <Row>
            <Col>
              <Form.Group
                style={{ marginBottom: "30px" }}
                onChange={this.setCType}
              >
                <Form.Check
                  type="checkbox"
                  value="Individual"
                  label="Individual"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                style={{ marginBottom: "30px" }}
                onChange={this.setCType}
              >
                <Form.Check type="checkbox" value="Team" label="Team" />
              </Form.Group>
            </Col>
          </Row>
        </>
      );
    }

    if (this.state.cType) {
      if (this.state.cType == "Team") {
        form = (
          <>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                People on your team (seperated by a comma and space)
              </Form.Label>
              <Form.Control
                placeholder="ex. Arnuv Tandon, Raj Raghulan, Samrudh Shenoy"
                name="competitors"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Choose your competition</Form.Label>
              <Form.Control
                as="select"
                name="competition"
                onChange={this.handleInputChange}
              >
                {this.state.events}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>What we did</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Give the reader a little bit of background on your team's competition and what you all did to prepare for it (your team can talk about their study habits, what you all made for your prejudged, etc.)"
                name="whatWeDid"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Challenges we ran into</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="A journey isn't complete with some roadbumps. Talk about some challenges or difficulties your team had to overcome."
                name="challenges"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>What we learned</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Describe what your team learned from competing in this competitions. You all can talk about anything ranging from time management to new technical skills developed"
                name="whatWeLearned"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            {this.state.links.map((value, index) => {
              return this.state.links[index];
            })}
            {linksWrapper}
          </>
        );
      } else {
        form = (
          <>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                placeholder="Enter your name here"
                name="competitors"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Choose your competition</Form.Label>
              <Form.Control
                as="select"
                name="competition"
                onChange={this.handleInputChange}
              >
                {this.state.events}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>What I did</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Give the reader a little bit of background on your competition and what you did to prepare for it (you can talk about your study habits, what you made for your prejudged [if applicable], etc.)"
                name="whatWeDid"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Challenges I ran into</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="A journey isn't complete with some roadbumps. Talk about some challenges or difficulties you had to overcome."
                name="challenges"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>What I learned</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Describe what you learned from competing in this competition. You can talk about anything ranging from time management to new technical skills you developed"
                name="whatWeLearned"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            {this.state.links.map((value, index) => {
              return this.state.links[index];
            })}
            {linksWrapper}
          </>
        );
      }
    }
    return (
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "15px" }}
        >
          <h2>Create a Competitions Showcase Post</h2>
          <br></br>
          <h8>
            It is unfortunate that conferences were cancelled because of
            COVID-19. However, the Homestead FBLA community can still celebrate
            and appreciate your hard work. Fill out the form below to create a
            post about your competition. This post will be showcased to advisors
            and members.
            <br></br>
            <br></br>
            <i>Note : You can still edit your post after posting it.</i>
          </h8>
          <br></br>
          <h8>
            <i>{this.state.pendingText}</i>
          </h8>
        </Row>
        <Container style={{ marginTop: "30px" }}>
          <Form>
            {typeCheck}
            {form}
          </Form>
        </Container>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "50px", marginBottom: "50px" }}
          onClick={this.submit}
        >
          <Button
            disabled={this.state.disabled}
            variant={this.state.buttonStyle}
            onClick={this.post}
          >
            {this.state.buttonText}
          </Button>{" "}
        </Row>
      </Container>
    );
  }
}

export default ShowcasePost;
