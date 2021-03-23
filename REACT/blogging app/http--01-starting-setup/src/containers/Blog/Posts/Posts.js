import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import { Link, Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  postSelectedHandler = (id) => {
    // this.setState({ selectedPostId: id });
    //another way to get the full post. either use this or link component.
    // this.props.history.push({pathname:'/'+id});
    // this.props.history.push('/'+id);
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "max",
          };
        });
        this.setState({ posts: updatedPosts });
        console.log(response);
        console.log(updatedPosts);
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  render() {
    let posts = <p>Something went wrongggggggggggggg!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Link to={"/posts/" + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
