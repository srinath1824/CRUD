import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import LockIcon from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Register() {
  const classes = useStyles();
  const history = useHistory();
  const [regDetails, setRegDetails] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState({});

  const validateForm = () => {

    let fields = { ...regDetails };
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }

    if (typeof fields["name"] !== undefined) {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "*Please enter your mobile no.";
    }

    if (typeof fields["phone"] !== undefined) {
      if (!fields["phone"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["phone"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== undefined) {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter strong password.";
      }
    }

    setError(errors);
    return formIsValid;

  }

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let fields = {};
      fields["name"] = "";
      fields["phone"] = "";
      fields["email"] = "";
      fields["password"] = "";
      setRegDetails(fields);
      alert("Form submitted");
      history.push("/home");
    }
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
          <Grid container>
            <Grid item xs={4}>
              <Button style={{display: "flex"}} onClick={() => history.push("/")}>Back</Button>
            </Grid>
            <Grid item xs={4}>
            <h3>Registration</h3>
            </Grid>
            <Grid item xs={4}></Grid>    
          </Grid>
          <div>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Name
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                error={error["name"] ? true : false}
                onChange={handleChange}
                name="name"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
              {error["name"] && error["name"].length && (
                <FormHelperText id="component-error-text">
                  {error["name"]}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Phone Number
            </InputLabel>
              <Input
                id="input-with-icon-adornment"
                type="number"
                error={error["phone"] ? true : false}
                onChange={handleChange}
                name="phone"
                startAdornment={
                  <InputAdornment position="start">
                    <LocalPhoneIcon />
                  </InputAdornment>
                }
              />
              {error["phone"] && error["phone"].length && (
                <FormHelperText id="component-error-text">
                  {error["phone"]}
                </FormHelperText>
              )}
            </FormControl>
          </div>


          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Email Address
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              error={error["email"] ? true : false}
              onChange={handleChange}
              name="email"
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
            />
            {error["email"] && error["email"].length && (
              <FormHelperText id="component-error-text">
                {error["email"]}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              Password
              </InputLabel>
            <Input
              id="input-with-icon-adornment"
              error={error["password"] ? true : false}
              onChange={handleChange}
              name="password"
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
            />
            {error["password"] && error["password"].length && (
              <FormHelperText id="component-error-text">
                {error["password"]}
              </FormHelperText>
            )}
          </FormControl>
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
