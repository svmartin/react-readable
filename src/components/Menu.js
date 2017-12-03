import React from "react";
import { Route, Link } from 'react-router-dom';
import ReactPosts from './ReactPosts';
import ReduxPosts from './ReduxPosts';
import UdacityPosts from './UdacityPosts';

const Menu = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
            <Link to="/" className="nav-item is-brand main-logo">
              <img src={require('../images/bulma.png')} alt="logo" />
            </Link>
        </div>

        <label className="nav-toggle" htmlFor="nav-toggle-state">
          <span />
          <span />
          <span />
        </label>

        <input type="checkbox" id="nav-toggle-state" />

        <div className="nav-right nav-menu">

          <Link to="/react" className="nav-item">React</Link>
          <Link to="/redux" className="nav-item">Redux</Link>
          <Link to="/udacity" className="nav-item">Udacity</Link>

        </div>
      </nav>
      <Route path="/react" component={ReactPosts}/>
      <Route path="/redux" component={ReduxPosts}/>
      <Route path="/udacity" component={UdacityPosts}/>
    </div>
  );
}

export default Menu;
