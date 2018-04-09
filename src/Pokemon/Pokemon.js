import React, { Component } from 'react';
import './Pokemon.css'

const Pokemon = ({ name, id, type, img, checked, onPokemonCheck }) => {
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
    background: colors[type]
  };

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