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
import Virginia from "assets/img/faces/Virginia.jpg";
import Catherine from "assets/img/faces/Catherine.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "assets/jss/material-kit-react/views/components.js";
import styles2 from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import ProjectPills from "views/Projects/ProjectComponents/ProjectPills.js";

import AELund from "assets/img/AEPics/AELund.png";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);
export default function PWB(props) {
  window.scrollTo(0, 0);
  const classes = useStyles();
  const classes2 = useStyles2();
  const imageClasses = classNames(
    classes2.imgRaised,
    classes2.imgRoundedCircle,
    classes2.imgFluid
  );
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Homestead FBLA"
        rightLinks={<HeaderLinks path="/partnership-with-business" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/PWBCover.jpg")}
        class="makeStyles-parallax-184 makeStyles-filter-185"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Partnership with Business.</h1>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <GridContainer style={{ marginTop: "450px" }}>
        <Container>
          <Row
            className="justify-content-md-center"
            style={{ marginBottom: "2rem" }}
          >
            <h1 style={{ fontSize: "3.2rem" }} className={classes.title}>
              What is the Partnership with Business Project?
            </h1>
          </Row>
          <Row className="justify-content-md-center">
            <div className={classes.title}>
              <h3>
                <small>
                  The purpose of this project is to learn about a business
                  through communication and interaction with the business
                  community. This year, the project chairs partnered with{" "}
                  <b>Block Island Organics</b>, a mineral-based sunscreen
                  company.
                </small>
              </h3>
            </div>
          </Row>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "5rem" }}
          >
            <h1 style={{ fontSize: "3.2rem" }} className={classes.title}>
              Meet the Project Chairs
            </h1>
          </Row>
          <Row>
            <Col>
              <GridItem xs={12} sm={12} md={6} className={classes2.itemGrid}>
                <img src={Virginia} alt="..." className={imageClasses} />
              </GridItem>
              <h4
                className={classes2.cardTitle}
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                Virginia Anderson
                <br />
                <small
                  className={classes2.smallTitle}
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  Partnership with Business Co-Chair
                </small>
              </h4>
            </Col>
            <Col>
              <GridItem xs={12} sm={12} md={6} className={classes2.itemGrid}>
                <img src={Catherine} alt="..." className={imageClasses} />
              </GridItem>
              <h4
                className={classes2.cardTitle}
                style={{ textAlign: "center", marginTop: "10px" }}
              >
                Catherine Zhang
                <br />
                <small className={classes2.smallTitle}>
                  Partnership with Business Co-Chair
                </small>
              </h4>
            </Col>
          </Row>
        </Container>
      </GridContainer>
      <ProjectPills
        pills={["Example Event #1", "Example Event #2"]}
        descriptions={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae rhoncus libero, ac finibus augue. Praesent sit amet tempus turpis. Pellentesque sapien neque, aliquam ut volutpat eget, fringilla vel purus. Duis iaculis gravida ante viverra consectetur. Pellentesque ultrices ante sed massa pharetra aliquam. Integer ligula ex, tincidunt nec pellentesque non, placerat non metus. Donec magna mi, vehicula pulvinar blandit vel, sodales eu lorem. Aenean purus neque, tincidunt sed molestie id, dapibus vitae elit. Vivamus gravida erat eu quam iaculis aliquam in ut mi. Nulla facilisi. Duis hendrerit, augue eu finibus finibus, leo risus imperdiet nulla, in tincidunt turpis metus euismod metus. Nullam placerat est in tortor condimentum, sit amet lobortis sapien congue.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae rhoncus libero, ac finibus augue. Praesent sit amet tempus turpis. Pellentesque sapien neque, aliquam ut volutpat eget, fringilla vel purus. Duis iaculis gravida ante viverra consectetur. Pellentesque ultrices ante sed massa pharetra aliquam. Integer ligula ex, tincidunt nec pellentesque non, placerat non metus. Donec magna mi, vehicula pulvinar blandit vel, sodales eu lorem. Aenean purus neque, tincidunt sed molestie id, dapibus vitae elit. Vivamus gravida erat eu quam iaculis aliquam in ut mi. Nulla facilisi. Duis hendrerit, augue eu finibus finibus, leo risus imperdiet nulla, in tincidunt turpis metus euismod metus. Nullam placerat est in tortor condimentum, sit amet lobortis sapien congue.",
        ]}
        images={[[AELund], [AELund]]}
        captions={[["caption"], ["caption"]]}
      />
      <Footer />
    </div>
  );
}
