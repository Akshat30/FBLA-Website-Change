import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import loginPage from "assets/img/loginPage.jpg";
import firebase from "firebase/firebase.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(styles);

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      redirect: null
    };
    this.goTo = this.goTo.bind(this);
  }

  goTo(location) {
    this.setState({ redirect: location });
  }

  checkIfUser(user, db) {
    let data = null;
    return Promise.all([
      db
        .collection("users")
        .where("email", "==", user["email"])
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            data = doc.data();
          });
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        })
    ]).then(() => {
      return Promise.resolve(data);
    });
  }

  login(typeOfLogin) {
    var ref = this;
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        var token = result.credential.accessToken;
        var user = result.user;
        var db = firebase.firestore();

        this.checkIfUser(user, db).then(data => {
          if (data) {
            if (data["authLevel"] == typeOfLogin) {
              if (data["authLevel"] == "member") {
                ref.goTo("/member-portal");
              } else {
                ref.goTo("/admin-portal");
              }
            } else {
              user
                .delete()
                .then(function() {
                  ref.goTo("/wrong-login");
                })
                .catch(function(error) {});
            }
          } else {
            user
              .delete()
              .then(function() {
                ref.goTo("/not-a-user");
              })
              .catch(function(error) {});
          }
        });
      });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return <LoginPageComponent login={this.login} />;
  }
}

function LoginPageComponent(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const login = loginType => {
    props.login(loginType);
  };

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Homestead FBLA"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + loginPage + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4} style={{ marginTop: "130px" }}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        target="_blank"
                        color="transparent"
                        onClick={() => login("member")}
                      >
                        Member Login
                      </Button>
                      <Button
                        target="_blank"
                        color="transparent"
                        onClick={() => login("admin")}
                      >
                        Admin Login
                      </Button>
                    </div>
                  </CardHeader>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
