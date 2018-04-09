import React from 'react';
import './Menu.css';

const Menu = (props) => {
  return (
    <div className="menu">
      <div className="categories">
        <div>
          <span className="radio"></span>
          <span>show all</span>
        </div>
        <div>
          <span className="radio"></span>
          <span>only collected</span>
        </div>
        <div>
          <span className="radio"></span>
          <span>not collected</span>
        </div>
      </div>
      <div className="sort-by">
        <div className="sorting-title">Sort by</div>
        <select className="sorting-category">
          <option value="id">id</option>
          <option value="name">name</option>
          <option value="type">type</option>
          <option value="stats">stats</option>
        </select>
        <select className="sorting-direction">
          <option value="ascending">low to high</option>
          <option value="descending">high to low</option>
        </select>
      </div>
    </div>
  );
};

export default Menu;