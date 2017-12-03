import React from 'react';
import { Route, Link } from 'react-router-dom';

class ReduxPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {posts: null}
  }
  render() {
    return (
      <div>Redux posts</div>
    )
  }
}

export default ReduxPosts;
