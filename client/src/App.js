import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import CardComponent from "./components/Card";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <h3>Blog</h3>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
        <CardComponent />

        <div>
          <Switch>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
