import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';
import MyEvents from './pages/MyEvents/MyEvents';
import Home from './pages/Home/Home';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <>
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/add-activities/:Id">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/my-events">
            <MyEvents></MyEvents>
          </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
