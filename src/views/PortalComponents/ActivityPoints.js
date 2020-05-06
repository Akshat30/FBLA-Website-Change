import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container, Row } from "react-bootstrap";
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { makeStyles } from "@material-ui/core/styles";

function ActivityPoints(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <>
      <GridContainer justify="center" style={{ marginTop: "50px" }}>
        <Row className="justify-content-md-center">
          <h2>Activity Points</h2>
        </Row>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Event</TableCell>
                <TableCell align="right">Points</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.points.map(row => (
                <>
                  <TableRow key={row.Event}>
                    <TableCell component="th" scope="row">
                      {row.Event}
                    </TableCell>
                    <TableCell align="right">{row.Points}</TableCell>
                    <TableCell align="right">{row.Date}</TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
          </Table>
          {props.points.length == 0 && (
            <h5 style={{ marginTop: "50px", marginBottom: "50px" }}>
              You don't seem to have any activity points
            </h5>
          )}
        </TableContainer>
      </GridContainer>
      <Container style={{ marginTop: "25px" }}>
        <Row className="justify-content-md-center">
          <h6>
            <i>Total Points : {props.totalPoints}</i>
          </h6>
        </Row>
      </Container>
    </>
  );
}

export default ActivityPoints;
