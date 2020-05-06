import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import firebase from "firebase/firebase.js";

export default class ApproveBlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberNames: [],
      titles: [],
      descriptions: [],
      toRender: [],
    };
    this.approve = this.approve.bind(this);
  }

  approve(name, title, description, i) {
    var db = firebase.firestore();
    let promises = [];
    var pendingRef = db.collection("blog posts").doc("pending");
    promises.push(
      pendingRef.update({
        [name]: firebase.firestore.FieldValue.delete(),
      })
    );
    promises.push(
      db
        .collection("blog posts")
        .doc("approved")
        .set(
          {
            [name]: [title, description, name],
          },
          { merge: true }
        )
    );
    Promise.all(promises).then(() => {
      console.log("the i", i);
      let newNames = this.state.memberNames;
      let newTitles = this.state.titles;
      let newDesc = this.state.descriptions;
      newNames.splice(i);
      newTitles.splice(i);
      newDesc.splice(i);

      console.log("out new data", newNames, newTitles, newDesc);

      this.setState({
        memberNames: newNames,
        titles: newTitles,
        descriptions: newDesc,
      });
    });
  }

  componentDidMount() {
    let db = firebase.firestore();
    let memberNames = [];
    let descriptions = [];
    let titles = [];
    let promises = [];

    promises.push(
      db
        .collection("blog posts")
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            if (doc.id == "pending") {
              var data = Object.values(doc.data());
              for (var i = 0; i < data.length; i++) {
                titles.push(data[i][0]);
                descriptions.push(data[i][1]);
                memberNames.push(data[i][2]);
              }
            }
          });
        })
    );

    Promise.all(promises).then(
      function () {
        this.setState({ memberNames: memberNames });
        this.setState({ descriptions: descriptions });
        this.setState({ titles: titles });
      }.bind(this)
    );
  }

  render() {
    let toRender = [];
    for (let i = 0; i < this.state.memberNames.length; i++) {
      toRender.push(
        <Row style={{ marginTop: "50px" }}>
          <Card className="text-center" style={{ width: "200%" }}>
            <Card.Body>
              <Card.Title>{this.state.descriptions[i]}</Card.Title>
              <Card.Text>{this.state.titles[i]}</Card.Text>
              <Button
                onClickvariant="primary"
                onClick={() =>
                  this.approve(
                    this.state.memberNames[i],
                    this.state.titles[i],
                    this.state.descriptions[i],
                    i
                  )
                }
              >
                Approve
              </Button>
            </Card.Body>
            <Card.Header>By : {this.state.memberNames[i]}</Card.Header>
          </Card>
        </Row>
      );
    }
    return (
      <>
        <Container>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "25px", marginBottom: "25px" }}
          >
            <h1>Pending Blog Posts</h1>
            <br></br>
            <h8>
              These are blog posts from members that are awaiting approval to be
              featured on the website. Read over the post, and hit approve to
              feature it on the "Blogs" page on the website
            </h8>
          </Row>
          {toRender}
          {toRender.length == 0 ? (
            <Row
              className="justify-content-md-center"
              style={{ marginTop: "100px" }}
            >
              <h5>No pending blog posts</h5>
            </Row>
          ) : (
            <></>
          )}
        </Container>
      </>
    );
  }
}
