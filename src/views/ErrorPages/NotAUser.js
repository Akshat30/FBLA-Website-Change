import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "react-bootstrap/Container";
const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize : "1.8rem"
  }
}));

export default function TypographyTheme() {
  const classes = useStyles();

  return (
    <Container className="justify-content-md-center" style = {{marginTop : "200px"}}>
      <div className={classes.root}>
        {
          "You are not on the Homestead FBLA email list. Join the Homestead FBLA email list in order to create an account on our website. To join the email list, talk with tech officers or email tech@hhsfbla.com for a prompt response. You MUST be a Homestead student or staff to join the email list and create an account on the website."
        }
      </div>
    </Container>
  );
}
