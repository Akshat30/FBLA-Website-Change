import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
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
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import firebase from "firebase/firebase.js";
import EventsComponent from "components/EventsComponent/EventsComponent";
import ActivityPoints from "views/PortalComponents/ActivityPoints.js";

//components
import BlogPost from "views/PortalComponents/BlogPost.js";
import ShowcasePost from "views/PortalComponents/ShowcasePost.js";

const useStyles = makeStyles(styles);
export default class MemberPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberAuth: false,
      memberName: null,
      memberPoints: [],
      totalPoints: 0,
      redirect: null,
    };
    this.authMember = this.authMember.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  authMember() {
    var points = [];
    var promises = [];
    var ref = this;
    var totalPoints = 0;
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          var db = firebase.firestore();
          var memberRef = db.collection("users").doc(user["displayName"]);
          promises.push(
            memberRef.get().then(function (doc) {
              var data = doc.data();
              if (
                doc.exists &&
                data["authLevel"] == "member" &&
                user["email"] == data["email"]
              ) {
                promises.push(
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
                );
                Promise.all(promises).then(function () {
                  ref.setState({ memberAuth: true });
                  ref.setState({ memberName: user["displayName"] });
                  ref.setState({ memberPoints: points });
                  ref.setState({ totalPoints: totalPoints });
                });
              } else {
                ref.goTo("/cant-be-here");
              }
            })
          );
        } else {
          ref.goTo("/cant-be-here");
        }
      }.bind(this)
    );
  }
  goTo(location) {
    this.setState({ redirect: location });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <MemberPortalComponent
        memberAuth={this.state.memberAuth}
        authMember={this.authMember}
        memberPoints={this.state.memberPoints}
        memberName={this.state.memberName}
        totalPoints={this.state.totalPoints}
      />
    );
  }
}
function MemberPortalComponent(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  var points = props.memberPoints;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  if (props.memberAuth) {
    return (
      <div>
        <Header
          color="transparent"
          brand="Homestead FBLA"
          rightLinks={<HeaderLinks path="/member-portal" />}
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
                      <h6>MEMBER</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  An artist of considerable range, Chet Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.{" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Events Calendar",
                        tabContent: (
                          <Row style={{ marginTop: "-20px" }}>
                            <EventsComponent />
                          </Row>
                        ),
                      },
                      {
                        tabButton: "Activity Points",
                        tabContent: (
                          <ActivityPoints
                            totalPoints={props.totalPoints}
                            points={props.memberPoints}
                          />
                        ),
                      },
                      {
                        tabButton: "Write Blog Post",
                        tabContent: <BlogPost />,
                      },
                      {
                        tabButton: "Publish Competitions Showcase",
                        tabContent: <ShowcasePost />,
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    props.authMember();
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
