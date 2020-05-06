import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section} style = {{marginBottom : "-40px"}}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Homestead Horizon</h2>
            <h4>
             The Horizon is Homestead FBLA's newsletter. Read them to stay up-to-date on Homestead FBLA!
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
