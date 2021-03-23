import React, { Component } from "react";
import "./Blog.css";
import Posts from "../Blog/Posts/Posts";
import { Route, NavLink, Switch } from "react-router-dom";
// import NewPost from "./NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";

const asyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});
class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "blue",
                    textDecoration: "none",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                  // hash and search are not doing anything , just to learn that we can also provide "to" this way
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Posts /> */}
        {/* <Route path="/" exact render={() => <h1>home</h1>} /> */}
        <Switch>
          <Route path="/new-post" component={asyncNewPost} />
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
