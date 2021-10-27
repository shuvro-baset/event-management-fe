import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
