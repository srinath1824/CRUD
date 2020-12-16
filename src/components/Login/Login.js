import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Person, Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Login.css";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));
  

function Login() {
    const classes = useStyles();
    const history = useHistory();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleSubmit = () => {
        history.push("/home");
      }
      const handleRegister = () => {
        history.push("/register");
      }
        return (
            <div style={{margin: "20px"}}>
                <Paper elevation={3}>
                    <div style={{padding: "30px"}}>
                    <h3>Login</h3>
                    <FormControl className="textField" variant="outlined" style={{width: "100%"}}>
                    <InputLabel htmlFor="outlined-adornment-password">UserName</InputLabel>
                    <OutlinedInput
                        id="outlined-basic"
                        label="UserName"
                        variant="outlined"
                        name="username"
                        value={values.username}
                        onChange={(e) => handleChange(e)}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            >
                            <Person />
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    </FormControl>
                    <br/>
                    <FormControl className="textField" style={{width: "100%"}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                    </FormControl>
                    <br/>
                    <Button variant="contained" color="primary" className="buttons" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button variant="contained" color="primary" className="buttons"onClick={handleRegister}>
                        Register
                    </Button>
                    </div>
                </Paper>
            </div>
        )
}

export default Login
