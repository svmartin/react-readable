import React from "react";
import { Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Category from './Category'
import ReactPosts from './ReactPosts';
import ReduxPosts from './ReduxPosts';
import UdacityPosts from './UdacityPosts';

const Categories = () => {
  return (
    <div>
      <div className="columns is-centered">
          <Category
            customClass={"notification is-info title"}
            title={"React"}
          />
        <Category
          customClass={"notification is-success title"}
          title={"Redux"}
        />
        <Category
          customClass={"notification is-warning title"}
          title={"Udacity"}
        />
      </div>
    </div>
  );
}

export default Categories;
