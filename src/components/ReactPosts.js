import React from 'react';
import { Route, Link } from 'react-router-dom';

class ReactPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {posts: null}
  }
  render() {
    return (
      <div>React posts here</div>
    )
  }
}

export default ReactPosts;
