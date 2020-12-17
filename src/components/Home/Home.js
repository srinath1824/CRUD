import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Home() {
  const classes = useStyles();
  const history = useHistory();
  const sendColor = () => {
    history.push("/home");
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Enter any color
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={<InputAdornment position="start"></InputAdornment>}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className="buttons"
        onClick={sendColor}
      >
        Send
      </Button>
    </div>
  );
}

export default Home;
