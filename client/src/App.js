import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import AddPost from "./components/AddPost";

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

        <div>
          <Switch>
            <Route exact path="/add" component={AddPost} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
