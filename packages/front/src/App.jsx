import React from "react";
import LoginPage from "./components/LoginPage";
import Logout from "./components/Logout";
import SignUpPage from "./components/SignUpPage";
import Nav from "./components/Nav";
import Landing from "./components/landing/Landing";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MyPets from "./components/MyPets";
import EditProfile from "./components/editprofile/EditProfile";
import Dashboard from "./components/dashboard/Dashboard";
import SearchSitters from "./components/SearchSitters";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/myPets/:name/">
            <MyPets />
          </Route>

          <Route path="/profile/edit" component={EditProfile} />

          <Route exact path="/searchsitters">
            <SearchSitters />
          </Route>

          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/admin">
            <Admin />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
