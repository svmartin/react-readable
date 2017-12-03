import React from 'react';
import { Route, Link } from 'react-router-dom';

const Category = (props) => {
  const linkTo = `/${props.title}`;

  return (
    <div className="column blocked">
      <Link to={linkTo}><p className={props.customClass}> { props.title }</p></Link>
    </div>
  );
}

export default Category;
