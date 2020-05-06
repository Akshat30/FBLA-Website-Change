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
import Image from "react-bootstrap/Image";
import FBLAPBL from "assets/img/FBLAPBL.png";
import CAFBLA from "assets/img/CAFBLA.jpg";
const useStyles = makeStyles(styles);

export default function ParentOrganizations() {
  const classes = useStyles();
  const goToCAFBLA = () => {
    window.location.href = "https://www.cafbla.org/";
};
const goToFBLAPBL = () => {
    window.location.href = "https://www.fbla-pbl.org/";
};
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Parent Organizations</h2>
          <h5 className={classes.description}>
            Homestead FBLA has 2 parent organizations it works with to provide
            students with the best possible experience.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} style = {{marginTop : "80px"}}>
            <InfoArea
              title="California FBLA"
              icon={SupervisorAccountIcon}
              iconColor="info"
              vertical
            />
            <Image 
                src={CAFBLA} 
                style = {{
                    position : "absolute",
                    width : "35%",
                    top : "-75px",
                    left : "183px",
                    curson : "pointer"
                }}
                onClick = {goToCAFBLA}
            />
            <Row>
              <Col>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick = {goToCAFBLA}
                >
                  View Website
                </Button>
              </Col>
            </Row>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} style = {{marginTop : "80px"}}>
            <InfoArea
              title="FBLA-PBL"
              icon={SupervisorAccountIcon}
              iconColor="info"
              vertical
            />
            <Image 
                src={FBLAPBL} 
                style = {{
                    position : "absolute",
                    width : "28%",
                    top : "-70px",
                    left : "200px",
                    cursor : "pointer"
                }}
                onClick = {goToFBLAPBL}
            />
            <Row>
              <Col>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick = {goToFBLAPBL}
                >
                  View Website
                </Button>
              </Col>
            </Row>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
