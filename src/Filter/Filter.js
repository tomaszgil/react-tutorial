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

    this.colors = {
      'bug': '#e0e5c3',
      'dragon': '#c8b1db',
      'ice': '#d4f8f9',
      'fighting': '#f2c9c6',
      'fire': '#f9dfb8',
      'flying': '#e2ccfc',
      'grass': '#b8f2b8',
      'ghost': '#bcb4c4',
      'ground': '#d8d1c3',
      'electric': '#ffffa5',
      'normal': '#cecdc4',
      'poison': '#e6b5f2',
      'psychic': '#f7afd8',
      'rock': '#cbccaf',
      'water': '#adcef7'
    };

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
    const pokemonTypes = this.pokemonTypes
      .map(type => <div key={type} style={{backgroundColor: 'white', border: `2px solid ${this.colors[type]}`}}>{type}</div>);
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
              <span className="category-items">
              { pokemonTypes }
              </span>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Filter;