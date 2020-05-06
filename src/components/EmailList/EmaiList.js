import React from "react";
import firebase from "firebase/firebase.js";
import { Container, Row, Col } from "react-bootstrap";

export default class EmaiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailList: []
    };
  }

  componentDidMount() {
    var db = firebase.firestore();
    var emailList = [];
    Promise.all([
      db
        .collection("users")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            emailList.push(doc.data()["email"]);
          });
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        })
    ]).then(
      function() {
        this.setState({ emailList: emailList });
      }.bind(this)
    );
  }

  render() {
    let toRender = "";
    let count = 0;

    for (let i = 0; i < this.state.emailList.length; i++) {
      count = count + this.state.emailList[i] + 1;
      if (count > 110) {
        toRender = toRender + "\n";
        count = 0;
      }
      toRender = toRender + this.state.emailList[i] + " ";
    }
    return <Container>{toRender}</Container>;
  }
}
