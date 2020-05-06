import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Button from "@material-ui/core/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About Us</h2>
          <h5 className={classes.description}>
            Homestead FBLA is hosted at Homestead High School in Cupertino,
            California. The club has 3 components that make it so unique
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Competitions"
              description="Homestead FBLA competes at Bay Section, States, and Nationals every year. We currently have
              23 consecutive Bay Section Championships, 21 consecutive state championships, and ___ national championships
              "
              icon={CheckCircleOutlineIcon}
              iconColor="success"
              vertical
            />
                          <Link to = "/competitions-history">

            <Button variant="outlined" color="primary">
              View Our Competitive History

            </Button>
            </Link>

          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Projects"
              description="Homestead FBLA has 3 projects that run weekly meetings. 
              The projects consist of the American Enterprise Project, the Community Service Project, and the Partnership 
              with Business project.
              "
              icon={SupervisorAccountIcon}
              iconColor="info"
              vertical
            />
            <Row>
              <Col>
              <Link to = "/american-enterprise">
                <Button
                  variant="outlined"
                  color="primary"
                >
                  AE
                </Button>
                </Link>
              </Col>
              <Col>
              <Link to = "/community-service">

                <Button
                  variant="outlined"
                  color="primary"
                >
                  CS
                </Button>
                </Link>

              </Col>
              <Col>
              <Link to="/partnership-with-business">

                <Button
                  variant="outlined"
                  color="primary"
                >
                  PWB
                </Button>
                </Link>

              </Col>
            </Row>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Member Blogs"
              description="View blog posts by members regarding their experience in Homestead FBLA. Member write about events, competitions, and projects"
              icon={RecordVoiceOverIcon}
              iconColor="danger"
              vertical
            />
            <Link to = "/blog-posts">
            <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: "21px" }}
            >
              View Member Blogs
            </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
