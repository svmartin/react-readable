import React from 'react';
import { Route, Link } from 'react-router-dom';

class UdacityPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {posts: null}
  }
  render() {
    return (
      <div>Udacity posts</div>
    )

  }
}

export default UdacityPosts;
