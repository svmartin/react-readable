import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import Categories from './components/Categories'


class App extends Component {

  // state = {
  //   posts: null
  // }
  //
  // componentDidMount() {
  //   fetch('url')
  //     .then(res => res.json())
  //     .then(posts => {
  //       this.setState({ posts })
  //     })
  // }
  render() {
    return (
      <div className="container">
        <Menu />
        {/* <Categories /> */}
      </div>
    );
  }
}

export default App;
