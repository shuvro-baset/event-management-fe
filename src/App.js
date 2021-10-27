import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar></NavBar>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
