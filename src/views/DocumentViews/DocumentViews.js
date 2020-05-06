import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
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
import HomesteadHorizon from "./HomesteadHorizon.js";
import HomesteadHorizonIntro from "./HomesteadHorizonIntro.js";
import PressReleases from "./PressReleases";
import PressReleasesIntro from "./PressReleasesIntro";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default class DocumentViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderViewer: false,
      renderSrc: ""
    };
    this.setViewer = this.setViewer.bind(this);
  }

  setViewer(pdfPath) {
    this.setState({ renderViewer: true });
    console.log("the path", pdfPath);
    this.setState({ renderSrc: pdfPath });
  }

  render() {
    return (
      <>
        <DocumentViewsComponent
          setViewer={this.setViewer}
          renderViewer={this.state.renderViewer}
          renderSrc={this.state.renderSrc}
        />
      </>
    );
  }
}

function DocumentViewsComponent(props) {
  console.log("tenemos", props.renderSrc);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Homestead FBLA"
        rightLinks={<HeaderLinks path = "/doc-views"/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      {!props.renderViewer ? (
        <>
          <Parallax image={require("assets/img/DocViewsCover.jpg")}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>Press Releases + Horizon</h1>
                    <h3 className={classes.subtitle}>
                      Learn about Homestead FBLA at recent conferences or read
                      our monthly newsletter below
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <PressReleasesIntro />
            <PressReleases
              setViewer={props.setViewer}
              renderViewer={props.renderViewer}
              renderSrc={props.renderSrc}
            />
            <HomesteadHorizonIntro />
            <HomesteadHorizon
              setViewer={props.setViewer}
              renderViewer={props.renderViewer}
              renderSrc={props.renderSrc}
            />
          </div>
        </>
      ) : (
        <div>{(window.location = props.renderSrc)}</div>
      )}

      <Footer />
    </div>
  );
}
