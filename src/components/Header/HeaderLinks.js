/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import firebase from "firebase/firebase.js";

const useStyles = makeStyles(styles);

export default class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      authType: "",
      redirect: null
    };
    this.logOut = this.logOut.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }
  logOut() {
    firebase
      .auth()
      .signOut()
      .then(
        function() {
          this.navigateTo("/");
          window.location.reload(false);
        }.bind(this),
        function(error) {
          this.navigateTo("/error");
        }.bind(this)
      );
  }

  navigateTo(location) {
    if (location != this.props.path) {
      this.setState({ redirect: location });
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          var name = user["displayName"];
          this.setState({ authenticated: true });
          var db = firebase.firestore();
          var docRef = db.collection("users").doc(name);

          docRef.get().then(
            function(doc) {
              if (doc.exists) {
                this.setState({ authLevel: doc.data().authLevel });
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }
            }.bind(this)
          );
        } else {
          this.setState({ authenticated: false });
        }
      }.bind(this)
    );
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <HeaderLinksComponent
        authenticated={this.state.authenticated}
        authLevel={this.state.authLevel}
        logOut={this.logOut}
        navigateTo={this.navigateTo}
      />
    );
  }
}

function HeaderLinksComponent(props) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Projects"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/american-enterprise" className={classes.dropdownLink}>
              American Enterprise
            </Link>,
            <Link to="/community-service" className={classes.dropdownLink}>
              Community Service
            </Link>,
            <Link
              to="/partnership-with-business"
              className={classes.dropdownLink}
            >
              Partnership with Business
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={() => props.navigateTo("/competitions-history")}
          className={classes.navLink}
        >
          Competitions History
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={() => props.navigateTo("/doc-views")}
          className={classes.navLink}
        >
          Press Releases + Horizon
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          onClick={() => props.navigateTo("/blog-posts")}
          className={classes.navLink}
        >
          Member Blogs
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {!props.authenticated ? (
          <Button
            color="transparent"
            target="_blank"
            onClick={() => props.navigateTo("/login-page")}
            className={classes.navLink}
          >
            Login
          </Button>
        ) : props.authLevel == "member" ? (
          <div>
            <Button
              color="transparent"
              target="_blank"
              onClick={() => props.navigateTo("/member-portal")}
              className={classes.navLink}
            >
              My Portal
            </Button>
            <Button
              color="transparent"
              target="_blank"
              onClick={props.logOut}
              className={classes.navLink}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <div>
            <Button
              color="transparent"
              target="_blank"
              onClick={() => props.navigateTo("/admin-portal")}
              className={classes.navLink}
            >
              My Portal
            </Button>
            <Button
              color="transparent"
              target="_blank"
              onClick={props.logOut}
              className={classes.navLink}
            >
              Log Out
            </Button>
          </div>
        )}
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
          title="Like us on Facebook"
        >
          <Button
            href="https://www.facebook.com/homestead8990/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on Instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/homesteadfbla/?hl=en"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Connect with us on Linkedin"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/company/homestead-fbla"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
