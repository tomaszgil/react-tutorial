import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
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

        this.setState({
          isFetched: true,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="app">
        <Logo />
        <Search isFetched={this.state.isFetched} pokemons={this.allPokemons} />
      </div>
    );
  }
}

export default App;