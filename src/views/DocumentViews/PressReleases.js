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

import NLCCover2019 from "./NLCCover2019.png";
import LDICover2019 from "./LDICover2019.png";
import BaySectionCover2020 from "./BaySectionCover2020.png";

import NLC2019 from "assets/pdf/2019 NLC Press Release.pdf";
import LDI2019 from "assets/pdf/LDI 2019 PRESS RELEASE.pdf";
import Bay2020 from "assets/pdf/2020 BAY Press Release.pdf";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function PressReleases(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Link className={classes.link}>
              <img
                src={NLCCover2019}
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
                onClick={() => props.setViewer(NLC2019)}
              >
                View NLC 2019 Press Release
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link className={classes.link}>
              <img
                src={LDICover2019}
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
                onClick={() => props.setViewer(LDI2019)}
              >
                View LDI 2019 Press Release
              </Button>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} style={{ marginTop: "70px" }}>
            <Link className={classes.link}>
              <img
                src={BaySectionCover2020}
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
                onClick={() => props.setViewer(Bay2020)}
              >
                View Bay Section 2020 Press Release
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
