import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/posts">Blog</a>
          <div>
            <li>
              <link to={"/posts"}>Posts</link>
            </li>
            <li>
              <link to={"/add"}>Add</link>
            </li>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default App;
