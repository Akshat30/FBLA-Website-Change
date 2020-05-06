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
          "You have used a log in portal that does not match your authentication level (ex. member using admin portal). Please use the correct portal to log in. If your issue persists, email tech@hhsfbla.com for a prompt response."
        }
      </div>
    </Container>
  );
}
