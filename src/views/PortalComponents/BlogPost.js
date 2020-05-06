import React from "react";
import {
  Container,
  Row,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import firebase from "firebase/firebase.js";
import { Redirect } from "react-router-dom";

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      buttonText: "Submit for Verification",
      buttonStyle: "outline-primary",
      name: "",
      pendingText: "",
      redirect: null,
    };
    this.blogTitle = this.blogTitle.bind(this);
    this.blogDescription = this.blogDescription.bind(this);
    this.submit = this.submit.bind(this);
    this.goTo = this.goTo.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    var db = firebase.firestore();
    var promises = [];
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          this.setState({ name: user["displayName"] });
        } else {
          this.goTo("/");
        }
      }.bind(this)
    );
    Promise.all(promises).then(
      function () {
        db.collection("blog posts")
          .where(this.state.name, "array-contains", this.state.name)
          .get()
          .then(
            function (querySnapshot) {
              querySnapshot.forEach(
                function (doc) {
                  if (doc.id == "pending") {
                    this.setState({
                      pendingText:
                        "You have a pending blog post. You can have at most one pending blog post, so submitting again will simply update your pending blog post",
                    });
                  }
                }.bind(this)
              );
            }.bind(this)
          )
          .catch(function (error) {
            console.log("Error getting documents: ", error);
          });
      }.bind(this)
    );
  }
  goTo(location) {
    this.setState({ redirect: location });
  }
  blogTitle(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  blogDescription(event) {
    console.log(event.target.value);
    this.setState({ description: event.target.value });
  }
  submit() {
    this.setState({ buttonText: "Submitting..." });
    this.setState({ buttonStyle: "outline-warning" });
    const title = this.state.title;
    const description = this.state.description;
    var db = firebase.firestore();
    var name = this.state.name;

    db.collection("blog posts")
      .doc("pending")
      .set(
        {
          [name]: [title, description, name],
        },
        { merge: true }
      )
      .then(
        function () {
          this.setState({ buttonText: "Submitted!" });
          this.setState({ buttonStyle: "outline-success" });
          this.componentDidMount();
        }.bind(this)
      )
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "15px" }}
        >
          <h2>Write a Blog Post</h2>
          <br></br>
          <h8>
            Fill out the input fields below and then submit. Your post will be
            reviewed by the officer team, and if the post is approved it will
            appear on the "Blogs" section of the website
          </h8>
          <br></br>
          <h8>
            <i>{this.state.pendingText}</i>
          </h8>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Blog Title
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.blogTitle}
            />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Blog Description</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              onChange={this.blogDescription}
            />
          </InputGroup>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "50px" }}
          onClick={this.submit}
        >
          <Button variant={this.state.buttonStyle}>
            {this.state.buttonText}
          </Button>{" "}
        </Row>
      </Container>
    );
  }
}

export default BlogPost;
