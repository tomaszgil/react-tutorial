import './App.css';
import Logo from "../Logo/Logo";
import React from "react";
import Search from "../Search/Search";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.pokemons = [];
        this.state = {
            isFetched: false
        };
        this.fetchPokemons = this.fetchPokemons.bind(this);
    }

    componentDidMount() {
        this.fetchPokemons();
    }

    fetchPokemons() {
        fetch("https://api.mlab.com/api/1/databases/pokedex/collections/pokemons?apiKey=RZxUI6ohr3E8hmBGY6HDPlRWpXmVhzgh")
            .then(blob => blob.json())
            .then(data => {
                this.pokemons = data.map(element => ({
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
                <Logo/>
                <Search isFetched={this.state.isFetched} pokemons={this.pokemons} />
            </div>
        );
    }
}

export default App;
