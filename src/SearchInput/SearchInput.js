import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    const query = e.target.value;
    this.setState({ value: query });
    this.props.onChange(query);
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({
      value: ''
    });
    this.props.onChange('');
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

export default SearchInput;