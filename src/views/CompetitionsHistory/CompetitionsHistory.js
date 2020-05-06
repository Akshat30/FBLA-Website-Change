import React from "react";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "assets/jss/material-kit-react/views/components.js";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Autocomplete from "@material-ui/lab/Autocomplete";

import firebase from "firebase/firebase.js";

const useStyles = makeStyles(styles);
const tableStyles = makeStyles({
  table: {
    minWidth: 650
  }
});
const dropdownStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
const inputStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));
const buttonStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function createData(name, year, conference, event, place) {
  return { name, year, conference, event, place };
}

export default class CompetitionsHistory extends React.Component {
  constructor(props) {
    super(props);
    this.compsHistoryQuery = this.compsHistoryQuery.bind(this);
    this.state = {
      compsHistory: [],
      events: [],
      years: [],
      conferences: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let tEvents = [];
    let db = firebase.firestore();
    Promise.all([
      db
        .collection("events")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            tEvents = doc.data();
          });
        })
    ]).then(
      function() {
        this.setState({ events: Object.values(tEvents)[0] });
      }.bind(this)
    );
    let tYears = [];
    Promise.all([
      db
        .collection("years")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            tYears = doc.data();
          });
        })
    ]).then(
      function() {
        this.setState({ years: Object.values(tYears)[0] });
      }.bind(this)
    );
    let tConf = [];
    Promise.all([
      db
        .collection("conferences")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            tConf = doc.data();
          });
        })
    ]).then(
      function() {
        this.setState({ conferences: Object.values(tConf) });
      }.bind(this)
    );
  }
  compsHistoryQuery(name, year, conf, event, place) {
    let toWrite = [];
    let myEvents = this.state.events;
    let myYears = this.state.years;
    let myConf = this.state.conferences;

    let myName = null;
    let myPlace = null;

    if (name) {
      myName = name;
    }
    if (year) {
      myYears = [year];
    }
    if (conf) {
      myConf = [conf];
    }
    if (event) {
      myEvents = [event];
    }
    if (place) {
      myPlace = place;
    }

    console.log(myEvents);
    console.log(myYears);
    console.log(myConf);

    let reqs = [];
    let db = firebase.firestore();
    let tRef = db.doc("/"); //filler
    let results = [];
    let promises = [];

    if (event) {
      for (let i = 0; i < myEvents.length; i++) {
        for (let k = 0; k < myYears.length; k++) {
          for (let q = 0; q < myConf.length; q++) {
            tRef = db.doc(
              "/results" +
                "/" +
                myEvents[i] +
                "/" +
                myYears[k] +
                "/" +
                myConf[q]
            );
            promises.push(
              tRef
                .get()
                .then(function(doc) {
                  if (doc.exists) {
                    var names = Object.keys(doc.data());
                    var places = Object.values(doc.data());
                    for (let d = 0; d < names.length; d++) {
                      if (name) {
                        if (place) {
                          if (name == names[d] && place == places[d]) {
                            results.push({
                              name: names[d],
                              place: places[d],
                              conference: myConf[q],
                              year: myYears[k],
                              event: myEvents[i]
                            });
                          }
                        } else {
                          if (name == names[d]) {
                            results.push({
                              name: names[d],
                              place: places[d],
                              conference: myConf[q],
                              year: myYears[k],
                              event: myEvents[i]
                            });
                          }
                        }
                      } else if (place) {
                        if (place == places[d]) {
                          results.push({
                            name: names[d],
                            place: places[d],
                            conference: myConf[q],
                            year: myYears[k],
                            event: myEvents[i]
                          });
                        }
                      } else {
                        results.push({
                          name: names[d],
                          place: places[d],
                          conference: myConf[q],
                          year: myYears[k],
                          event: myEvents[i]
                        });
                      }
                    }
                  } else {
                  }
                })
                .catch(function(error) {})
            );
          }
        }
      }
      Promise.all(promises).then(
        function() {
          this.setState({ compsHistory: results });
        }.bind(this)
      );
    } else if (conf) {
      for (let k = 0; k < myYears.length; k++) {
        for (let q = 0; q < myConf.length; q++) {
          if (name && place) {
            tRef = db
              .collection("confQuerys")
              .doc(myConf[q])
              .collection(String(myYears[k]))
              .where("name", "==", name)
              .where("place", "==", place);
          } else if (!name && place) {
            console.log("querying with place", place)
            tRef = db
              .collection("confQuerys")
              .doc(myConf[q])
              .collection(String(myYears[k]))
              .where("place", "==", parseInt(place));
          } else if (!place && name) {
            tRef = db
              .collection("confQuerys")
              .doc(myConf[q])
              .collection(String(myYears[k]))
              .where("name", "==", name);
          } else {
            tRef = db
              .collection("confQuerys")
              .doc(myConf[q])
              .collection(String(myYears[k]));
          }
          promises.push(
            tRef
              .get()
              .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                  var event = doc.data()["event"];
                  var name = doc.data()["name"];
                  var place = doc.data()["place"];

                  results.push({
                    name: name,
                    place: place,
                    conference: myConf[q],
                    year: myYears[k],
                    event: event
                  });
                });
              })
              .catch(function(error) {})
          );
        }
      }
      Promise.all(promises).then(
        function() {
          this.setState({ compsHistory: results });
        }.bind(this)
      );
    }
  }
  render() {
    return (
      <CompetitionsHistoryComponent
        compsHistory={this.state.compsHistory}
        compsHistoryQuery={this.compsHistoryQuery}
        events={this.state.events}
        conferences={this.state.conferences}
      />
    );
  }
}

function CompetitionsHistoryComponent(props) {
  console.log("the events", props.conferences);

  let menuEvents = [];
  let menuConf = [];

  for (let i = 0; i < props.events.length; i++) {
    menuEvents.push(
      <MenuItem value={props.events[i]}>{props.events[i]}</MenuItem>
    );
  }
  for (let i = 0; i < props.conferences.length; i++) {
    menuConf.push(
      <MenuItem value={props.conferences[i]}>{props.conferences[i]}</MenuItem>
    );
  }

  const classes = useStyles();
  const buttonClasses = buttonStyles();
  const dropdownClasses = dropdownStyles();
  const inputClasses = inputStyles();
  const tableClasses = tableStyles();

  const [conf, setConf] = React.useState("");
  const [event, setEvent] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current);
  }, []);
  const confChange = event => {
    setConf(event.target.value);
  };

  let toRender = [];
  props.compsHistory.map(row =>
    toRender.push(
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.year}</TableCell>
        <TableCell align="right">{row.conference}</TableCell>
        <TableCell align="right">{row.event}</TableCell>
        <TableCell align="right">{row.place}</TableCell>
      </TableRow>
    )
  );

  const eventChange = event => {
    setEvent(event.target.value);
  };
  const { ...rest } = props;
  const query = () => {
    props.compsHistoryQuery(
      document.getElementById("name").value,
      document.getElementById("year").value,
      conf,
      event,
      document.getElementById("place").value
    );
  };
  return (
    <div>
      <Header
        brand="Homestead FBLA"
        rightLinks={<HeaderLinks path="/competitions-history" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/competitionsCover.jpg")}
        class="makeStyles-parallax-184 makeStyles-filter-185"
        style={{ height: "105vh" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Competitions History.</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Container className="justify-content-md-center">
        <Row className="justify-content-md-center">
          <h2
            className={classes.title}
            style={{
              marginTop: "25rem",
              marginBottom: "3rem",
              fontSize: "2.6rem"
            }}
          >
            View Homestead FBLA's Competitive History Over the Years
          </h2>
        </Row>
        <Row>
          <Col>
            <form className={inputClasses.root} noValidate autoComplete="off">
              <TextField id="name" label="Name" />
            </form>
          </Col>
          <Col>
            <form className={inputClasses.root} noValidate autoComplete="off">
              <TextField id="year" label="Year" />
            </form>
          </Col>
          <Col>
            <FormControl className={dropdownClasses.formControl}>
              <InputLabel id="demo-simple-select-label">Conferences</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={conf}
                onChange={confChange}
              >
                {menuConf}
              </Select>
            </FormControl>
          </Col>
          <Col>
            <FormControl className={dropdownClasses.formControl}>
              <InputLabel id="demo-simple-select-label">Events</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={event}
                onChange={eventChange}
              >
                {menuEvents}
              </Select>
            </FormControl>
          </Col>
          <Col className="justify-content-md-center">
            <form className={inputClasses.root} noValidate autoComplete="off">
              <TextField id="place" label="Place" />
            </form>
          </Col>
        </Row>

        <Row
          className="justify-content-md-center"
          style={{ marginBottom: "40px" }}
        >
          <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={query}>
              Search
            </Button>
          </div>
        </Row>
        <Row>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Year</TableCell>
                  <TableCell align="right">Conference</TableCell>
                  <TableCell align="right">Event</TableCell>
                  <TableCell align="right">Place</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{toRender}</TableBody>
            </Table>
          </TableContainer>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
