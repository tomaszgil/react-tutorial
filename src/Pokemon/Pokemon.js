import React, { Component } from 'react';
import './Pokemon.css'

class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collected: this.props.collected
    };

    this.handlePokeballClick = this.handlePokeballClick.bind(this);
  }

  handlePokeballClick(e) {
    e.preventDefault();

    this.setState({
      collected: !this.state.collected
    });

    this.props.onPokemonCheck(this.props.id);
  }

  render() {
    // TODO global declaration of colors and types
    const colors = {
      'water': '#c5eefa',
      'grass': '#d9f5cb',
      'electric': '#faf4cf',
      'fire': '#fde9e4',
      'bug': '#efe1da',
      'poison': '#eee9e8',
      'normal': '#dfdffa',
      'ground': '#dbcabc'
    };

    const style = {
      background: colors[this.props.type]
    };

    return (
      <li className={this.state.collected ? "pokemon collected" : "pokemon"}>
        <div className="wrapper">
          <div className="img-background" style={style}/>
          <img src={this.props.img}/>
        </div>
        <div className="information">
          <a href="#" className="pokeball" onClick={this.handlePokeballClick}/>
          <span className="name">{this.props.name}</span>
          <span>
            <span className="type">{this.props.type}</span>
            <span className="id">{this.props.id}</span>
          </span>
          </div>
      </li>
    );
  }
}

export default Pokemon;