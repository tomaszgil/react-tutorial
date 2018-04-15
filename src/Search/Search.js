import React, { Component } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchResults from '../SearchResults/SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);
    this.allPokemons = this.props.pokemons;

    this.state = {
      pokemons: this.allPokemons
    };

    this.criteria = {
      searchQuery: '',
    };

    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handlePokemonStateChange = this.handlePokemonStateChange.bind(this);
    this.processSearchQuery = this.processSearchQuery.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.isFetched) {
      this.allPokemons = nextProps.pokemons;
      this.setState({
        pokemons: this.allPokemons
      });
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

// TODO Step 5.
// TODO 5.1. Add new fields in search criteria, storing the information about sort key,
// TODO      direction and and filter based upon whether a pokemon is collected (you can implement filter constants from _utils/Filters.js.
// TODO 5.2. Add functions that will handle updating new search criteria and updating search results.
// TODO 5.3. Add functions that will handle filtering and sorting given array according to current search criteria.
// TODO      Update function responsible for updating search results.

  updateResults() {
    let result = this.processSearchQuery(this.allPokemons);

    this.setState({
      pokemons: result
    });
  }

  render() {
    return (
      <div>
        <SearchInput onChange={this.handleSearchQuery} />
        <SearchResults pokemons={this.state.pokemons} isFetched={this.props.isFetched} onPokemonCheck={this.handlePokemonStateChange} />
      </div>
    );
  }
}

export default Search;