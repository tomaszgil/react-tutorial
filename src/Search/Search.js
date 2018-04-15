import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import SearchInput from '../SearchInput/SearchInput';
import SearchResults from '../SearchResults/SearchResults';
import filters from '../_utils/Filters';

class Search extends Component {
  constructor(props) {
    super(props);
    this.allPokemons = this.props.pokemons;

    this.state = {
      pokemons: this.allPokemons
    };

    this.criteria = {
      searchQuery: '',
      sort: {
        key: 'id',
        direction: 'ascending'
      },
      filter: {
        collected: filters.SHOW_ALL
      }
    };

    this.handleSorting = this.handleSorting.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleFilterCollected = this.handleFilterCollected.bind(this);
    this.handlePokemonStateChange = this.handlePokemonStateChange.bind(this);
    this.sort = this.sort.bind(this);
    this.processSearchQuery = this.processSearchQuery.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.isFetched) {
      this.allPokemons = nextProps.pokemons;
      this.updateResults();
    }
  }

  handleSearchQuery(query) {
    this.criteria.searchQuery = query;
    this.updateResults();
  }

  handlePokemonStateChange(id) {
    const pokemon = this.allPokemons.find(pokemon => pokemon.id === id);
    pokemon.collected = !pokemon.collected;
  }

  handleFilterCollected(filter) {
    this.criteria.filter.collected = filter;
    this.updateResults();
  }

  handleSorting(key, direction) {
    this.criteria.sort.key = key;
    this.criteria.sort.direction = direction;
    this.updateResults();
  }

  sort(arr) {
    let multiplier = 1;
    const key = this.criteria.sort.key;

    switch(this.criteria.sort.direction) {
      case 'ascending': multiplier = 1; break;
      case 'descending': multiplier = -1; break;
      default: break;
    }

    return arr.sort((a, b) => {
      if (a[key] < b[key]) return -1 * multiplier;
      if (a[key] === b[key]) return 0;
      if (a[key] > b[key]) return multiplier;

      return 0;
    });
  }

// TODO Step 6.
// TODO 6.1. To Search component add a new field in search criteria which will store array of currently chosen pokemon types.
// TODO      You can import types from _utils/Filters.js file.
// TODO 6.2. Add a function that will take care of updating this field.
// TODO 6.3. Add or modify a function to filter given array upon selected types.

  applyFilters(arr) {
    let result = [];
    switch(this.criteria.filter.collected) {
      case filters.SHOW_ALL: result = arr; break;
      case filters.ONLY_COLLECTED: result = arr.filter(el => el.collected); break;
      case filters.NOT_COLLECTED: result = arr.filter(el => !el.collected); break;
      default: result = arr;
    }

    return result;
  }

  processSearchQuery(arr) {
    const template = this.criteria.searchQuery.toLowerCase();
    const fields = ['name', 'type', 'id'];

    return arr.filter(pokemon => {
      for (let field of fields)
        if (pokemon[field].toString().toLowerCase().includes(template))
          return true;

      return false;
    });
  }

  updateResults() {
    let result = this.applyFilters(this.allPokemons);
    result = this.processSearchQuery(result);
    result = this.sort(result);

    this.setState({
      pokemons: result
    });
  }

  render() {
    return (
      <div>
        <SearchInput onChange={this.handleSearchQuery} />
        <Menu onFilterChange={this.handleFilterCollected} onSortChange={this.handleSorting} />
        <SearchResults pokemons={this.state.pokemons} isFetched={this.props.isFetched} onPokemonCheck={this.handlePokemonStateChange} />
      </div>
    );
  }
}

export default Search;