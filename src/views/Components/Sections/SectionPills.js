import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>{props.title}</h3>
          </div>
          <div className={classes.title}>
            <h3>
              <small>{props.primaryDescription}</small>
            </h3>
          </div>
          <>
            <small style={{ fontSize: "1.2rem" }}>{props.description}</small>
          </>
        </div>
      </div>
    </div>
  );
}
