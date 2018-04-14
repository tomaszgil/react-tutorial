import React, { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);
    this.allPokemons = this.props.pokemons;

    this.state = {
      pokemons: this.allPokemons
    };

    this.handlePokemonStateChange = this.handlePokemonStateChange.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.isFetched) {
      this.allPokemons = nextProps.pokemons;
      this.setState({
        pokemons: this.allPokemons
      });
    }
  }

  handlePokemonStateChange(id) {
    const pokemon = this.allPokemons.find(pokemon => pokemon.id === id);
    pokemon.collected = !pokemon.collected;
  }

  render() {
    return (
      <div>
        <SearchResults pokemons={this.state.pokemons} isFetched={this.props.isFetched} onPokemonCheck={this.handlePokemonStateChange} />
      </div>
    );
  }
}

export default Search;