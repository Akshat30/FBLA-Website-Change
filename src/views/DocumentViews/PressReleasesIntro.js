import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function PressReleasesIntro() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ marginBottom: "-40px" }}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Press Releases 2019-2020</h2>
            <h4>
              Learn about Homestead FBLA's visits to conferences this past year!
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
