import React, { Component } from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <form className="search">
      <input type="text" placeholder="Search"/>
    </form>
  );
};

export default Search;