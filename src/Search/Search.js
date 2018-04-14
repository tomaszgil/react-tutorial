import React, { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults';

class Search extends Component {
  constructor(props) {
    super(props);
    this.allPokemons = this.props.pokemons;

    this.state = {
      pokemons: this.allPokemons
    };
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.isFetched) {
      this.allPokemons = nextProps.pokemons;
      console.table(this.allPokemons);
    }
  }

  render() {
    return (
      <div>
        <SearchResults pokemons={this.state.pokemons} isFetched={this.props.isFetched} />
      </div>
    );
  }
}

export default Search;