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

// TODO Step 3.
// TODO 3.1. Add a method taking pokemon id as a parameter and toggling the collected field of pokemon with given id.

  componentWillReceiveProps(nextProps){
    if (nextProps.isFetched) {
      this.allPokemons = nextProps.pokemons;

      // TODO 3.2. For now, change the pokemon array in component’s state after the data is fetched.

      console.table(this.allPokemons);
    }
  }

  render() {
    // TODO 3.3. Pass created function to SearchResults component adding next prop. Pay attention to the context of this
    // TODO      function if you are planning to use this keyword in there. You might need to perform
    // TODO      this.myMethod = this.myMethod.bind(this) in the constructor to make sure whenever this function
    // TODO      is called, it has got the right context.

    return (
      <div>
        <SearchResults pokemons={this.state.pokemons} isFetched={this.props.isFetched} />
      </div>
    );
  }
}

export default Search;