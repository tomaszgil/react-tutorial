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
      showMenu: false,
      typeFilters: new Set(['bug', 'dragon', 'ice', 'fighting', 'fire', 'flying', 'grass', 'ghost', 'ground', 'electric', 'normal', 'poison', 'psychic', 'rock', 'water'])
    };

    this.toggleFilter = this.toggleFilter.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.filterPokemons = this.filterPokemons.bind(this);
  }

  toggleFilter() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  applyFilter(e) {
    // filter the state representing filtered types
    // if the set contains this element, delete it from the set
    // else, add the element to the set. then update the set
    if (this.state.typeFilters.has(e.target.innerHTML)) {
      const newFilters = this.state.typeFilters;
      newFilters.delete(e.target.innerHTML);
      this.setState({
        typeFilters: newFilters
      });
      // change the class to adjust the background color
      e.target.classList.add('disabled');
    } else {
      const newFilters = this.state.typeFilters;
      newFilters.add(e.target.innerHTML);
      this.setState({
        typeFilters: newFilters
      });
      e.target.classList.remove('disabled');
    }
    const filteredPokemons = this.filterPokemons(this.props.pokemons);
    this.props.onFilter(filteredPokemons);
  }

  filterPokemons(pokemons) {
    let filteredPokemons = [];
    pokemons.forEach(pokemon => {
      if (this.state.typeFilters.has(pokemon.type)) {
        filteredPokemons.push(pokemon);
      }
    });
    console.log(filteredPokemons);
    return filteredPokemons;
  }


  render() {
    const pokemonTypes = this.pokemonTypes
      .map(type => <div
        key={type}
        style={{backgroundColor: this.colors[type], border: `2px solid ${this.colors[type]}`}}
        onClick={this.applyFilter}>{type}
      </div>);
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