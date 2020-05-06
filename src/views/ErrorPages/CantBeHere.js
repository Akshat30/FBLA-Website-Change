import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: "2.5rem"
  }
}));

export default function TypographyTheme() {
  const classes = useStyles();

  return (
    <Container
      className="justify-content-md-center"
      style={{ marginTop: "250px" }}
    >
      <Row className="justify-content-md-center">
        <div className={classes.root}>
          {
            "Hey.....you can't be here. Lets go back to where you're supposed to be - Tech Team"
          }
        </div>
      </Row>
    </Container>
  );
}
