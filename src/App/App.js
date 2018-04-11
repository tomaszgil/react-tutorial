import React, { Component } from 'react';
import PokemonContainer from '../PokemonContainer/PokemonContainer';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.apiAccessKey = "RZxUI6ohr3E8hmBGY6HDPlRWpXmVhzgh";
    this.allPokemons = [];

    this.state = {
      filteredPokemons: [],
      pokemons: [],
      isFetched: false
    };

    this.fetchPokemons = this.fetchPokemons.bind(this);
    this.onPokemonCheck = this.onPokemonCheck.bind(this);
    this.updateQueried = this.updateQueried.bind(this);
    this.updateFiltered = this.updateFiltered.bind(this);
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    let p = fetch(`https://api.mlab.com/api/1/databases/pokedex/collections/pokemons?apiKey=${this.apiAccessKey}`)
      .then(blob => blob.json())
      .then(data => {
        this.allPokemons = data.map(element => ({
          name: element.name,
          id: element.id,
          img: element.img,
          type: element.types[0],
          collected: false
        }));

        this.setState({
          isFetched: true,
          pokemons: [...this.allPokemons],
          filteredPokemons: [...this.allPokemons]
        });
      })
      .catch(err => console.error(err));
  }

  onPokemonCheck(id) {
    const pokemon = this.allPokemons.find(pokemon => pokemon.id === id);
    pokemon.collected = !pokemon.collected;
  }

  updateFiltered(pokemons) {
    this.setState({
      pokemons: pokemons,
      filteredPokemons: pokemons
    });
  }
  
  updateQueried(pokemons) {
    this.setState({
      pokemons: pokemons
    });
  }

  render() {
    return (
      <div className="app">
        <Logo />
        <Search onSearch={this.updateQueried} pokemons={this.state.filteredPokemons} />
        <Menu onFilter={this.updateFiltered} pokemons={this.allPokemons} />
        <Filter onFilter={this.updateFiltered} pokemons={this.allPokemons} />
        <PokemonContainer pokemons={this.state.pokemons} isFetched={this.state.isFetched} onPokemonCheck={this.onPokemonCheck} />
      </div>
    );
  }
}

export default App;
