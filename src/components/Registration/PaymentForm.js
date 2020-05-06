import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const dropdownStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function PaymentForm(props) {
  const dropClasses = dropdownStyles();

  const [name, setName] = React.useState(
    props.userName != "" ? props.userName : ""
  );
  const [email, setEmail] = React.useState(
    props.userEmail != "" ? props.userEmail : ""
  );
  const [grade, setGrade] = React.useState(
    props.userGrade != "" ? props.userGrade : ""
  );

  const [id, setID] = React.useState(props.userID != "" ? props.userID : "");

  const handleName = event => {
    props.setUserName(event.target.value);
    setName(event.target.value);
  };
  const handleEmail = event => {
    props.setUserEmail(event.target.value);
    setEmail(event.target.value);
  };
  const handleGrade = event => {
    props.setUserGrade(event.target.value);
    setGrade(event.target.value);
  };
  const handleID = event => {
    props.setUserID(event.target.value);
    setID(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        User Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            label="Name (must match name on email)"
            fullWidth
            value={name}
            onChange={handleName}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={handleEmail}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Student ID"
            fullWidth
            value={id}
            onChange={handleID}
            type="number"
          />
        </Grid>
      </Grid>
      <Grid item style={{ marginLeft: "-8px" }}>
        <FormControl className={dropClasses.formControl}>
          <InputLabel id="demo-simple-select-label">Grade</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grade}
            onChange={handleGrade}
          >
            <MenuItem value={"9th"}>9th</MenuItem>
            <MenuItem value={"10th"}>10th</MenuItem>
            <MenuItem value={"11th"}>11th</MenuItem>
            <MenuItem value={"12th"}>12th</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
}
