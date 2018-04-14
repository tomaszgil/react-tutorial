import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.apiAccessKey = "RZxUI6ohr3E8hmBGY6HDPlRWpXmVhzgh";
    this.allPokemons = [];

    this.state = {
      isFetched: false
    };

    this.fetchPokemons = this.fetchPokemons.bind(this);
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    fetch(`https://api.mlab.com/api/1/databases/pokedex/collections/pokemons?apiKey=${this.apiAccessKey}`)
      .then(blob => blob.json())
      .then(data => {
        this.allPokemons = data.map(element => ({
          name: element.name,
          id: element.id,
          img: element.image,
          type: element.types[0],
          collected: false
        }));

        console.table(this.allPokemons);

        this.setState({
          isFetched: true,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
// TODO Step 2
// TODO 2.1. Import Search component and render it after Logo.
// TODO 2.2. Pass the variable from state and the pokemons array as props in Search component.
    return (
      <div className="app">
        <Logo />
      </div>
    );
  }
}

export default App;