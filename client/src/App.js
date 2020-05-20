import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import CardComponent from "./components/Card";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/posts">Blog</a>
          <div>
            <li>
              <Link to={"/posts"}>Posts</Link>
            </li>
            <li>
              <Link to={"/add"}>Add</Link>
            </li>
          </div>
        </nav>
        <CardComponent />
      </div>
    </Router>
  );
}

export default App;
