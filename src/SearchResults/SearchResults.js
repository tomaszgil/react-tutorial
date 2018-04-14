import React, { Component } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './SearchResults.css';

const PokemonContainer = ({ pokemons, isFetched, onPokemonCheck }) => {
  const pokemonsComponents = pokemons
    .map(pokemon => <Pokemon key={pokemon.id} {...pokemon} onPokemonCheck={onPokemonCheck} />);

  if (!isFetched)
    return (
      <div className="pokemon-container-loading">
        <div className="pokemon" />
      </div>
    );

  return (
    <ul className="pokemon-container">
      {pokemonsComponents}
    </ul>
  );
};

export default PokemonContainer;