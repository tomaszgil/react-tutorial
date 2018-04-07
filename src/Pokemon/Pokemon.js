import React, { Component } from 'react';
import './Pokemon.css'

const Pokemon = ({ name, id, type, img, checked, onPokemonCheck }) => {
  const getColor = () => {
    switch (id % 4) {
      case 0: return '#eee9e8';
      case 1: return '#d9f5cb';
      case 2: return '#faf4cf';
      case 3: return '#fde9e4';
    }
  };

  const style = {
    background: getColor()
  };

  console.log(style, id);

  return (
    <li className="pokemon"
        onClick={() => onPokemonCheck(id)}>
      <div className="wrapper">
        <div className="img-background" style={style} />
        <img src={img} />
      </div>
      <div className="information">
        <span className="name">{name}</span>
        <span className="type">{type}</span>
        <span className="id">{id}</span>
      </div>
    </li>
  );
};

export default Pokemon;