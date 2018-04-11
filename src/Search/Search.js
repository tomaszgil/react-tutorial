import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
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

  handleClear(e) {
    console.log("clearing");
    e.preventDefault();
    this.setState({
      value: ''
    });
    this.props.onSearch(this.props.pokemons);
  }

  render() {
    return (
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <div className="search-box">
          <input type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange}/>
          <div className="icon" />
          <a href="#" className={this.state.value !== '' ? "clear visible" : "clear"}  onClick={this.handleClear} />
        </div>
      </form>
    );
  }
}

export default Search;