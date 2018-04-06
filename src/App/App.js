import React, { Component } from 'react';
import PokemonContainer from '../PokemonContainer/PokemonContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.numPokemons = 10;
    this.allPokemons = new Array(this.numPokemons);

    this.state = {
      pokemons: [],
      isFetched: false
    };

    this.fetchPokemons = this.fetchPokemons.bind(this);
    this.onPokemonCheck = this.onPokemonCheck.bind(this);
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    let promises = [];

    for (let i = 0; i < this.numPokemons; i++) {
      let p = fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}/`)
        .then(blob => blob.json())
        .then(data => {
          this.allPokemons[i] = {
            name: data.name,
            id: data.id,
            img: data.sprites.front_default,
            type: data.version_group.name,
            checked: false
          };
        });

      promises.push(p);
    }

    Promise.all(promises)
      .then(() => {
        this.setState({
          isFetched: true,
          pokemons: this.allPokemons
        });
      }, (err) => {
        console.error(err);
      });
  }

  onPokemonCheck(id) {
    const pokemon = this.allPokemons.find(pokemon => pokemon.id === id);
    pokemon.checked = !pokemon.checked;

    console.log(this.state.pokemons);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <PokemonContainer pokemons={this.state.pokemons} isFetched={this.state.isFetched} onPokemonCheck={this.onPokemonCheck} />
      </div>
    );
  }
}

export default App;
