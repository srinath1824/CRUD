import './App.css';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
      <Router>
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/home" render={() => <Home />} />
      </Switch>
      </Router>
      </Container>
    </div>
  );
}

export default App;
