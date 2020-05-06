import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import profile from "assets/img/MemberIcon.jpg";
import Spinner from "react-bootstrap/Spinner";
import { Redirect } from "react-router-dom";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import firebase from "firebase/firebase.js";
import Checkout from "components/Registration/Checkout.js";
import EmailList from "components/EmailList/EmaiList.js";

import AdminEventsComponent from "views/PortalComponents/AdminEventsComponent.js";
import BarcodeGenerator from "components/BarcodeGenerator/BarcodeGenerator";
import ApproveBlogPosts from "views/PortalComponents/ApproveBlogPosts.js";
import ActivityPoints from "views/PortalComponents/ActivityPoints.js";
import ManualActivityPoints from "components/ManualActivityPoints/ManualActivityPoints.js";
import ShowcaseProject from "views/PortalComponents/ShowcasePost.js";

const useStyles = makeStyles(styles);

class MemberPortal extends React.Component {
  constructor(props) {
    super(props);
    this.authAdmin = this.authAdmin.bind(this);
    this.state = {
      adminAuth: false,
      adminName: null,
      adminPoints: [],
      eventDate: String(new Date()).substring(4, 15),
      eventName: "",
      eventDescription: "",
      eventDeletion: false,
      newEventDate: String(new Date()).substring(4, 15),
      authType: "",
      redirect: null,
      totalPoints: 0,
      eventID: null,
    };
    this.addEvent = this.addEvent.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setNewDate = this.setNewDate.bind(this);
    this.eventName = this.eventName.bind(this);
    this.eventDescription = this.eventDescription.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.eventDeletion = this.eventDeletion.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.goTo = this.goTo.bind(this);
    this.setEventID = this.setEventID.bind(this);
    this.checkIfAdmin = this.checkIfAdmin.bind(this);

  }
  goTo(location) {
    this.setState({ redirect: location });
  }

  checkIfAdmin(user, db) {
    let data = null;
    return Promise.all([
      db
        .collection("users")
        .where("email", "==", user["email"])
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            if (doc.data()["authLevel"] == "admin") {
              data = doc.data();
            }
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        }),
    ]).then(() => {
      return Promise.resolve(data);
    });
  }

  authAdmin() {
    var ref = this;
    var totalPoints = 0;
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          var db = firebase.firestore();
          this.checkIfAdmin(user, db).then((data) => {
            if (data) {
              this.setState({ authType: data["authType"] });
              var points = [];
              var promise = [];
              promise.push(
                db
                  .collection("activity points")
                  .where("Attendees", "array-contains", user["displayName"])
                  .get()
                  .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                      totalPoints =
                        totalPoints + parseInt(doc.data()["points"]);
                      points.push({
                        Event: doc.data()["event"],
                        Points: doc.data()["points"],
                        Date: doc.data()["timeStamp"],
                      });
                    });
                  })
                  .catch(function (error) {
                    console.log("Error getting documents: ", error);
                  })
              );
              Promise.all(promise).then(function () {
                ref.setState({ adminAuth: true });
                ref.setState({ adminName: user["displayName"] });
                ref.setState({ adminPoints: points });
                ref.setState({ totalPoints: totalPoints });
              });
            } else {
              this.goTo("/cant-be-here");
            }
          });
        } else {
          this.goTo("/cant-be-here");
        }
      }.bind(this)
    );
  }
  eventName(event) {
    this.setState({ eventName: event.target.value });
  }

  eventDeletion(event) {
    this.setState({ eventDeletion: !this.state.eventDeletion });
  }

  setEventID(id) {
    this.setState({ eventID: id });
  }

  addEvent() {
    var db = firebase.firestore();
    db.collection("events calendar")
      .add({
        date: this.state.eventDate,
        description: this.state.eventDescription,
        eventName: this.state.eventName,
      })
      .then(function (docRef) {})
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  editEvent() {
    var db = firebase.firestore();
    console.log("old date", this.state.eventDate);
    console.log("new date", this.state.newEventDate);
    console.log("the checkbox", this.state.eventDeletion);
    var toDelete = "";
    var promises = [];
    promises.push(
      db
        .collection("events calendar")
        .where("date", "==", this.state.eventDate)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            toDelete = doc.id;
          });
        })
    );
    Promise.all(promises).then(
      function () {
        db.collection("events calendar")
          .doc(toDelete)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
        if (!this.state.eventDeletion) {
          db.collection("events calendar")
            .add({
              date: this.state.newEventDate,
              description: this.state.eventDescription,
              eventName: this.state.eventName,
            })
            .then(function (docRef) {})
            .catch(function (error) {
              console.error("Error adding document: ", error);
            });
        }
      }.bind(this)
    );
  }

  eventDescription(event) {
    this.setState({ eventDescription: event.target.value });
  }

  setDate(date) {
    var strDate = String(date);
    strDate = strDate.substring(4, 15);
    this.setState({ eventDate: strDate });
  }

  setNewDate(date) {
    var strDate = String(date);
    strDate = strDate.substring(4, 15);
    this.setState({ newEventDate: strDate });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <AdminPortalComponent
        adminAuth={this.state.adminAuth}
        authAdmin={this.authAdmin}
        adminName={this.state.adminName}
        adminPoints={this.state.adminPoints}
        headerAccount={this.props.headerAccount}
        logOut={this.props.logOut}
        setDate={this.setDate}
        editEvent={this.editEvent}
        setNewDate={this.setNewDate}
        setEventName={this.eventName}
        setEventDescription={this.eventDescription}
        addEvent={this.addEvent}
        eventDeletion={this.eventDeletion}
        authType={this.state.authType}
        totalPoints={this.state.totalPoints}
        setEventID={this.setEventID}
        eventID={this.state.eventID}
      />
    );
  }
}
const buttonStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function AdminPortalComponent(props) {
  const classes = useStyles();
  const buttonClasses = buttonStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  var points = props.memberPoints;
  var pointsToRender = [];

  var tabs = [];
  tabs.push({
    tabButton: "Events Calendar",
    tabContent: (
      <AdminEventsComponent
        setDate={props.setDate}
        setEventName={props.setEventName}
        setEventDescription={props.setEventDescription}
        addEvent={props.addEvent}
        setNewDate={props.setNewDate}
        setEventName={props.setEventName}
        eventDeletion={props.eventDeletion}
        editEvent={props.editEvent}
      />
    ),
  });

  if (props.authType != "advisor") {
    tabs.push({
      tabButton: "Activity Points",
      tabContent: (
        <ActivityPoints
          totalPoints={props.totalPoints}
          points={props.adminPoints}
        />
      ),
    });
  }
  if (props.authType == "mrpr") {
    tabs.push({
      tabButton: "Pending Blog Posts",
      tabContent: <ApproveBlogPosts />,
    });
  }
  if (
    props.authType == "tech" ||
    props.authType == "president" ||
    props.authType == "advisor"
  ) {
    tabs.push({
      tabButton: "Register a Website User",
      tabContent: <Checkout />,
    });
  }
  tabs.push({
    tabButton: "Enter Activity Points",
    tabContent: (
      <Container>
        <Row>
          <BarcodeGenerator setEventID={props.setEventID} />
        </Row>
        <Row>
          <ManualActivityPoints eventID={props.eventID} />
        </Row>
      </Container>
    ),
  });
  tabs.push({
    tabButton: "Email List",
    tabContent: <EmailList />,
  });
  tabs.push({
    tabButton: "Create Competitions Showcase",
    tabContent: <ShowcaseProject />,
  });

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  if (props.adminAuth) {
    return (
      <div>
        <Header
          color="transparent"
          brand="Homestead FBLA"
          rightLinks={
            <HeaderLinks
              account={props.headerAccount}
              logOut={props.logOut}
              path="/admin-portal"
            />
          }
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{props.memberName}</h3>
                      <h6>ADMIN</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Welcome {props.adminName}. Your authorization level is :{" "}
                  {props.authType.toUpperCase()}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills alignCenter color="primary" tabs={tabs} />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    props.authAdmin();
    return (
      <>
        <Container
          className="justify-content-md-center"
          size="md"
          style={{ marginTop: "300px" }}
        >
          <Row className="justify-content-md-center">
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
          </Row>
        </Container>
      </>
    );
  }
}

export default MemberPortal;
