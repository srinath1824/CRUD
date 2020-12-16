import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Register() {
  const classes = useStyles();
  const history = useHistory();
  const [regDetails, setRegDetails] = useState({
    firstName: "",
    lastName: "",
    phone: null,
    email: "",
  });
  const [error, setError] = useState({});
  const handleRegister = () => {
    // history.push("/home");
    console.log("2222", regDetails);
    for (let i in regDetails) {
      console.log("666", i, regDetails[i], typeof regDetails[i]);
      if (regDetails[i] == "" || regDetails[i] == null) {
        setError(`${i} is Required`);
      }
    }
    setTimeout(() => {
      console.log("444", error);
    }, 2000);
  };

  const handleChange = (e) => {
    setRegDetails({
      ...regDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ margin: "20px" }}>
      <Paper elevation={3}>
        <div style={{ padding: "30px" }}>
          <h3>Registration</h3>
          <div>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                First Name
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Last Name
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                error={!regDetails.lastName ? true : false}
                onChange={handleChange}
                name="lastName"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
              {error.includes("lastName") && (
                <FormHelperText id="component-error-text">
                  LastName is required
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Phone Number
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              type="number"
              startAdornment={
                <InputAdornment position="start">
                  <LocalPhoneIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Email Address
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
            />
          </FormControl>{" "}
          <br />
          <Button
            variant="contained"
            color="primary"
            className="buttons"
            onClick={handleRegister}
          >
            Register
          </Button>
        </div>
      </Paper>
    </div>
  );
}
export default Register;
