
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icon
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from '@material-ui/core/Button';
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import Zibaa from "assets/img/faces/Zibaa.jpg";
import Darren from "assets/img/faces/Darren.jpg";
import Kelly from "assets/img/faces/Kelly.jpg";
import Samrudh from "assets/img/faces/Samrudh.jpg";
import Aryaa from "assets/img/faces/Aryaa.jpg";
import Mayuri from "assets/img/faces/Mayuri.jpg";
import Rohan from "assets/img/faces/Rohan.jpg";
import Sruthi from "assets/img/faces/Sruthi.jpg";
import Raj from "assets/img/faces/Raj.jpg";
import Akshat from "assets/img/faces/Akshat.jpg";
import Erin from "assets/img/faces/Erin.jpg";
import Smera from "assets/img/faces/Smera.jpg";
import Nadya from "assets/img/faces/Nadya.jpg";
import Arnuv from "assets/img/faces/Arnuv.jpg";
import Martin from "assets/img/faces/Martin.jpg";
import Andra from "assets/img/faces/Andra.jpg";
import Tishani from "assets/img/faces/Tishani.jpg";
import Peri from "assets/img/faces/Peri.jpg";
import Catherine from "assets/img/faces/Catherine.jpg";
import Virginia from "assets/img/faces/Virginia.jpg";
import Roma from "assets/img/faces/Roma.jpg";
import Clarissa from "assets/img/faces/Clarissa.jpg";
import Grid from '@material-ui/core/Grid';
import {
  Link
} from "react-router-dom";


import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const carouselStyles = <span aria-hidden="true" className="carousel-override-prev-icon" />
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Meet the Team</h2>
      <div>
        <GridContainer>
          <Carousel prevIcon = {carouselStyles}>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Zibaa} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Zibaa Adil
                <br />
                      <small className={classes.smallTitle}>President</small>
                    </h4>
                    <CardBody>
                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Darren} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Darren Hsing
                <br />
                      <small className={classes.smallTitle}>Executive Vice President</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Kelly} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Kelly Mao
                <br />
                      <small className={classes.smallTitle}>VP Conferences</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Samrudh} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Samrudh Shenoy
                <br />
                      <small className={classes.smallTitle}>VP Tech Operations</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Aryaa} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Aryaa Sapkota
                <br />
                      <small className={classes.smallTitle}>VP Member Relations</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Mayuri} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Mayuri Hebbar
                <br />
                      <small className={classes.smallTitle}>VP Case Studies</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Rohan} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Rohan Zamvar
                <br />
                      <small className={classes.smallTitle}>VP Speaking Competitions</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Sruthi} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Sruthi Rayaprolu
                <br />
                      <small className={classes.smallTitle}>VP Written Competitions</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Raj} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Raj Raghulan
                <br />
                      <small className={classes.smallTitle}>VP Tech Competitions</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Akshat} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Akshat Jain
                <br />
                      <small className={classes.smallTitle}>Middle Level Chair</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Erin} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Erin Yoon
                <br />
                      <small className={classes.smallTitle}>Middle Level Chair</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Smera} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Smera Doshi
                <br />
                      <small className={classes.smallTitle}>Public Relations</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Nadya} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Nadya Svidzerskaya
                <br />
                      <small className={classes.smallTitle}>Treasurer</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Arnuv} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Arnuv Tandon
                <br />
                      <small className={classes.smallTitle}>Executive Technology Chair</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Martin} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Martin Wu
                <br />
                      <small className={classes.smallTitle}>American Enterprise Chair</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Andra} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Andra Liu
                <br />
                      <small className={classes.smallTitle}>American Enterprise Chair</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Peri} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Peri Plantenberg
                <br />
                      <small className={classes.smallTitle}>Community Service Chair</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Tishani} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Tishani Weerasuriya
                <br />
                      <small className={classes.smallTitle}>Community Service Chair</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Virginia} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Virginia Anderson
                <br />
                      <small className={classes.smallTitle}>Partnership with Business Chair</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Catherine} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Catherine Zhang
                <br />
                      <small className={classes.smallTitle}>Partnership with Business Chair</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Clarissa} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Clarissa Gao
                <br />
                      <small className={classes.smallTitle}>Ex-Offio/State PR</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Roma} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Roma Bedekar
                <br />
                      <small className={classes.smallTitle}>Ex-Officio/Bay Section President</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Zibaa} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Zibaa Adil
                <br />
                      <small className={classes.smallTitle}>President</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                  <Col>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={Darren} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Darren Hsing
                <br />
                      <small className={classes.smallTitle}>Executive Vice President</small>
                    </h4>
                    <CardBody>

                    </CardBody>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
            <Button variant="outlined" color="primary"> 
            <Link to = "/meet-the-team">
            Learn More About Our Officers

            </Link>
          </Button>                
            </Grid>
          </Grid>
        </GridContainer>
      </div>
    </div>
  );
}
