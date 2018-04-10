import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.pokemonTypes = [
      'bug',
      'dragon',
      'ice',
      'fighting',
      'fire',
      'flying',
      'grass',
      'ghost',
      'ground',
      'electric',
      'normal',
      'poison',
      'psychic',
      'rock',
      'water'
    ]

    this.state = {
      showMenu: false
    };

    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <div className="filter">
        <div className="toggle-filter" onClick={this.toggleFilter}>
          <span className="filter-icon" />
          <span className="filter-text">Filter Pokedex </span>
        </div>

        {this.state.showMenu &&
          <div className="filter-menu">
            <div className="types">
              <span className="category-title">Pokemon Type</span>

            </div>
          </div>
        }
      </div>
    );
  }
}

export default Filter;