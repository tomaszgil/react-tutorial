import React, { Component } from 'react';

const Pokemon = ({ name, id, type, img, checked, onPokemonCheck }) => {
    return (
      <li className="pokemon"
          onClick={() => onPokemonCheck(id)}>
        {id} {name} {type} {img} {checked}
      </li>
    );
};

export default Pokemon;