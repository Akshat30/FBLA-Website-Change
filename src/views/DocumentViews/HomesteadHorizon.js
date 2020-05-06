import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import horizon1 from "./Horizon1.png";
import Horizon2020 from "assets/pdf/Horizon2020.pdf";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle";

const useStyles = makeStyles(styles);

export default function SectionExamples(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" style={{ marginTop: "-30px" }}>
          <GridItem xs={12} sm={12} md={6}>
            <img
              src={horizon1}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
            <Button
              color="primary"
              size="lg"
              simple
              onClick={() => props.setViewer(Horizon2020)}
            >
              View Horizon Edition 1
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
