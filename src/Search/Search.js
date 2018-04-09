import React, { Component } from 'react';
import './Search.css';
import searchIcon from './search.svg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const query = e.target.value;
    const template = query.toLowerCase();

    const fields = ['name', 'type', 'id'];
    const result = this.props.pokemons.filter(pokemon => {
      for (let field of fields)
        if (pokemon[field].toString().toLowerCase().includes(template))
          return true;

      return false;
    });

    this.props.onSearch(result);
    this.setState({ value: query });
  }

  render() {
    return (
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <img src={searchIcon} className="icon" alt="logo" />
        <input type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
      </form>
    );
  }
}

export default Search;