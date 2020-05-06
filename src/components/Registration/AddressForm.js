import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
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

export default function AddressForm(props) {
  const dropClasses = dropdownStyles();

  let refreshMember = "none";
  let refreshAdmin = "none";

  if (props.userType == "member") {
    refreshMember = props.userType;
  } else if (props.userType !== "none") {
    refreshAdmin = props.userType;
  }

  const [member, setMember] = React.useState(refreshMember);
  const [admin, setAdmin] = React.useState(refreshAdmin);

  const memberChange = event => {
    props.setUserType(event.target.value);
    setMember(event.target.value);
  };

  const adminChange = event => {
    props.setUserType(event.target.value);
    setAdmin(event.target.value);
  };
  if (props.userType == "none") {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          User Type
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl className={dropClasses.formControl}>
              <InputLabel id="demo-simple-select-label">Member</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={member}
                onChange={memberChange}
              >
                <MenuItem value={"none"}>None</MenuItem>
                <MenuItem value={"member"}>Member</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={dropClasses.formControl}>
              <InputLabel id="demo-simple-select-label">Admin</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={admin}
                onChange={adminChange}
              >
                <MenuItem value={"none"}>None</MenuItem>
                <MenuItem value={"advisor"}>Advisor</MenuItem>
                <MenuItem value={"president"}>President</MenuItem>
                <MenuItem value={"tech"}>Tech Team</MenuItem>
                <MenuItem value={"mrpr"}>Mr/Pr</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  } else if (props.userType == "member") {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          User Type
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl className={dropClasses.formControl}>
              <InputLabel id="demo-simple-select-label">Member</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={member}
                onChange={memberChange}
              >
                <MenuItem value={"none"}>None</MenuItem>
                <MenuItem value={"member"}>Member</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={dropClasses.formControl} disabled>
              <InputLabel id="demo-simple-select-label">Admin</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={admin}
                onChange={adminChange}
              >
                <MenuItem value={"none"}>None</MenuItem>
                <MenuItem value={"advisor"}>Advisor</MenuItem>
                <MenuItem value={"president"}>President</MenuItem>
                <MenuItem value={"tech"}>Tech Team</MenuItem>
                <MenuItem value={"mrpr"}>Mr/Pr</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          User Type
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl className={dropClasses.formControl} disabled>
              <InputLabel id="demo-simple-select-label">Member</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={member}
                onChange={memberChange}
              >
                <MenuItem value={"none"}>None</MenuItem>
                <MenuItem value={"member"}>Member</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={dropClasses.formControl}>
              <InputLabel id="demo-simple-select-label">Admin</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={admin}
                onChange={adminChange}
              >
                <MenuItem value={"none"}>None</MenuItem>
                <MenuItem value={"advisor"}>Advisor</MenuItem>
                <MenuItem value={"president"}>President</MenuItem>
                <MenuItem value={"tech"}>Tech Team</MenuItem>
                <MenuItem value={"mrpr"}>Mr/Pr</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
