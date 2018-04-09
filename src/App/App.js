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
      pokemons: [],
      isFetched: false
    };

    this.fetchPokemons = this.fetchPokemons.bind(this);
    this.onPokemonCheck = this.onPokemonCheck.bind(this);
    this.updatePokemons = this.updatePokemons.bind(this);
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
          checked: false
        }));

        this.setState({
          isFetched: true,
          pokemons: this.allPokemons
        });
      })
      .catch(err => console.error(err));
  }

  onPokemonCheck(id) {
    const pokemon = this.allPokemons.find(pokemon => pokemon.id === id);
    pokemon.checked = !pokemon.checked;
  }

  updatePokemons(pokemons) {
    this.setState({
      pokemons: pokemons
    });
  }

  render() {
    return (
      <div className="app">
        <Logo />
        <Search onSearch={this.updatePokemons} pokemons={this.allPokemons} />
        <Menu />
        <Filter />
        <PokemonContainer pokemons={this.state.pokemons} isFetched={this.state.isFetched} onPokemonCheck={this.onPokemonCheck} />
      </div>
    );
  }
}

export default App;
