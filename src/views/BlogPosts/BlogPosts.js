import React from "react";
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
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionPills from "views/Components/Sections/SectionPills.js";
import firebase from "firebase/firebase.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import Row from "react-bootstrap/Row";

import {Container, Spinner} from "react-bootstrap"

const useStyles = makeStyles(styles);

export default class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      titles: [],
      descriptions: [],
      loaded : false
    };
  }

  componentDidMount() {
    var db = firebase.firestore();
    var promises = [];
    let names = [];
    var titles = [];
    var descriptions = [];
    promises.push(
      db
        .collection("blog posts")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            if (doc.id == "approved") {
              let data = Object.values(doc.data());
              for (let i = 0; i < data.length; i++) {
                titles.push(data[i][1]);
                descriptions.push(data[i][0]);
                names.push(data[i][2]);
              }
            }
          });
        })
    );
    Promise.all(promises).then(
      function() {
        this.setState({ names: names });
        this.setState({ titles: titles });
        this.setState({ descriptions: descriptions });
        this.setState({loaded : true})
      }.bind(this)
    );
  }

  render() {
    console.log("the state", this.state.names);
    return (
      <BlogPostsComponent
        names={this.state.names}
        titles={this.state.titles}
        descriptions={this.state.descriptions}
        loaded = {this.state.loaded}
      />
    );
  }
}

function BlogPostsComponent(props) {
  const classes = useStyles();
  const { ...rest } = props;
  var toRender = [];
  for (let i = 0; i < props.names.length; i++) {
    toRender.push(
      <SectionPills
        title={props.titles[i]}
        primaryDescription={"By : " + props.names[i]}
        description={props.descriptions[i]}
      />
    );
  }
  if(props.loaded){
  return (
    <div>
      <Header
        brand="Homestead FBLA"
        rightLinks={<HeaderLinks path = "/blog-posts"/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <>
        <Parallax image={require("assets/img/BlogCover.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Blog Posts</h1>
                  <h3 className={classes.subtitle}>
                    View blogs posted by members about their experience in
                    Homestead FBLA
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          {toRender}
        </div>
        {toRender.length == 0 ? (
          <Row
            style={{ marginTop: "300px", marginBottom: "100px" }}
            className="justify-content-md-center"
          >
            <h5>No blog posts yet! Come back soon.</h5>
          </Row>
        ) : (
          <></>
        )}
      </>
      <Footer />
    </div>
  );
        }else{
          return(
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
          )
        }
}
