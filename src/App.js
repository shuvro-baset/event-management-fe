import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from './components/Banner/Banner';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
