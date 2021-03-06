import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

import CardComponent from "./components/Card";
import Register from "./components/Register";
import Login from "./components/login";
import AddPost from "./components/AddPost";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <div>
        <nav className="">
          <ul>
            <li>
              <Link to="/">Main Page</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/addPost">Add Post</Link>
            </li>
          </ul>
        </nav>

        <div>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/addPost">
              <AddPost />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
