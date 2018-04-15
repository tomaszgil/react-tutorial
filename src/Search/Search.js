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

// TODO Step 4.
// TODO 4.1. Add a new class property that will store our search criteria.
// TODO      For now it can be a JavaScript object with a single property which will store a query string from search input.
// TODO 4.2. Create a function, which will take an array of pokemons as a parameter and return a new array of pokemons,
// TODO      but only those which id, name or type matches the value of string query created in 1.1 (you can use filter function).
// TODO 4.3. Create a function, which will take care of updating the results. For now, it should take array of all pokemons,
// TODO      call the function from 1.2. on it and write the result from it into the pokemon array in the state.
// TODO 4.4. Last function we need to create will be responsible for updating search query in criteria and calling function updating the results.
// TODO      This function has to be passed to SearchInput component as a prop.
// TODO 4.5. Add SearchInput component above SearchResults in render function. Remeber to pass it aformentioned function as a prop.

  render() {
    return (
      <div>
        <SearchResults pokemons={this.state.pokemons} isFetched={this.props.isFetched} onPokemonCheck={this.handlePokemonStateChange} />
      </div>
    );
  }
}

export default Search;